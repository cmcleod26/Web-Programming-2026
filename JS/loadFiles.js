import { FileItem } from "./createFile.js";

async function loadFilesForFolder(folder, manager) {
    const response = await fetch('http://localhost:3000/api/files/' + folder.mongoId);
    const dbFiles = await response.json();

    for (const dbFile of dbFiles) {
        const newFile = new FileItem(dbFile.name, folder, manager);
        newFile.createFileInHTML();
        newFile.mongoId = dbFile._id;
        manager.files.push(newFile);
        folder.files.push(newFile);
    }
}

export default loadFilesForFolder;