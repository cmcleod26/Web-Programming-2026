import folder from "./Folder.js";

async function loadAllFolders(manager) {
    const owners = ['Connor', 'Isabel', 'Cody'];

    for (const ownerName of owners) {
        const response = await fetch('http://localhost:3000/api/folders/' + ownerName);
        const dbFolders = await response.json();

        let root = null;
        for (let i = 0; i < manager.roots.length; i++) {
            if (manager.roots[i].rootName === ownerName) {
                root = manager.roots[i];
            }
        }

        dbFolders.forEach(function(dbFolder) {
            const newFolder = new folder(dbFolder.name, manager);
            newFolder.mongoId = dbFolder._id;
            newFolder.rootfolder = root;
            newFolder.createFolderInHTML();
            newFolder.folderDiv.style.display = 'none';

            manager.folders.push(newFolder);
            root.folders.push(newFolder);
        });
    }
}

export default loadAllFolders;
