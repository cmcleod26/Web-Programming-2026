const express = require('express');
const router = express.Router();
const File = require('../models/FileSchema');

// GET - read/retrieve data
//POST - create new data
// PUT - Update existing data
// Delete - delete Data

router.get('/:folderId', async (req, res) => {
    try {
        const files = await File.find({ folderId: req.params.folderId});
        res.json(files);
    } catch (error){
        res.status(500).json({message: error.message});
    }
});

router.post('/', async(req, res) => {
    try {
        const {name, folderId, content, password} = req.body;
        if (password !== process.env.COMMIT_PASSWORD){
            return res.status(401).json({message: 'Incorrect Password'});
        }
        const file = new File({name, folderId, content});
        const savedFile = await file.save();
        res.status(201).json(savedFile);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});



router.put('/:id', async(req, res) => {
    try {
        const {name, content, password} = req.body;
        if(password !== process.env.COMMIT_PASSWORD){
            return res.status(401).json({message: 'Incorrect Password'});
        }
        const file = await File.findByIdAndUpdate(req.params.id, { $set: { name: name, content: content } }, {new:true});
        if (!file){
            return res.status(404).json({message: 'file not found'});
        }
        res.json(file);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.delete('/:id', async(req,res) => {
    try {
        const {password} = req.body;
        if(password !== process.env.COMMIT_PASSWORD){
            return res.status(401).json({message: 'Incorrect Password'});
        }
        const file = await File.findByIdAndDelete(req.params.id);
        if (!file){
            return res.status(404).json({message: 'file not found'});
        }
        res.json({ message: 'File deleted' });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;