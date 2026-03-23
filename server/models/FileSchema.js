const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//name, content, folderId, createdAt, updatedAt
const fileSchema = new Schema({
    name: {type: String, required: true},
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', required: true },
    content: {type: String, default: ''} 
}, {timestamps: true});

const File = mongoose.model('File', fileSchema);
module.exports = File;

