// const mongoose = require('mongoose');
import mongoose from "mongoose";
const Schema = mongoose.Schema;

//name, owner
const folderSchema = new Schema({
    name: {type: String, required: true},
    owner: {type: String, required: true}
});

const Folder = mongoose.model('Folder', folderSchema);
module.exports = Folder; // available to other files