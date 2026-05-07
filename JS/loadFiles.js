import { FileItem } from "./createFile.js";

// fetches files for a folder from db when that folder is first clicked
// we only load once since we check files.length === 0 before calling this
async function loadFilesForFolder(folder, manager) {
    const response = await fetch('http://localhost:3000/api/files/' + folder.mongoId);
    const dbFiles = await response.json();

    // build a fileitem for each db file and add to the dom and manager
    for (const dbFile of dbFiles) {
        const newFile = new FileItem(dbFile.name, folder, manager);
        newFile.createFileInHTML();
        newFile.mongoId = dbFile._id;
        manager.files.push(newFile);
        folder.files.push(newFile);
    }
}

export default loadFilesForFolder;