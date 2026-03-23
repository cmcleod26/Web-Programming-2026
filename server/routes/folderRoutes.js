const express = require('express');
const router = express.Router();
const Folder = require('../models/FolderSchema')

// GET - read/retrieve data
//POST - create new data
// PUT - Update existing data
// Delete - delete Data

router.get('/:owner', async (req, res) => {
    try {
        const folders = await Folder.find({ owner: req.params.owner});
        res.json(folders);
    } catch (error){
        res.status(500).json({ message: error.message});
    }
});

router.post('/', async (req, res) => {
    try {
        const {name, owner, password} = req.body;
        if (password !== process.env.COMMIT_PASSWORD){
            return res.status(401).json({ message: 'Incorrect password'});
        }
        const folder = new Folder({name, owner});
        const savedFolder = await folder.save();
        res.status(201).json(savedFolder);
        //201 is created
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.delete('/:id', async(req, res) =>{
    try {
        const { password } = req.body;

        if (password !== process.env.COMMIT_PASSWORD){
            return res.status(401).json({message: 'Incorrect Password'});
        }

        const folder = await Folder.findByIdAndDelete(req.params.id);

        if(!folder){
            return res.status(404).json({message: 'Folder not found'});
        }

        res.json({message: 'Folder deleted'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})



module.exports = router;