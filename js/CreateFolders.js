import folder from "./Folder.js";

async function createFolderHandler(event, manager) {
    event.preventDefault();

    if (!manager.selectedRoot) {
        alert("Select a root folder first");
        return;
    }

    const folderName = prompt('Creating folder in ' + manager.selectedRoot.rootName + '. Enter folder name:');
    folderName.trim();

    if (folderName !== '' && folderName && manager.selectedRoot !== null) {

        const password = prompt('Enter password to save folder:');

        

        const response = await fetch('http://localhost:5000/api/folders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: folderName, owner: manager.selectedRoot.rootName, password: password })
        });
        const data = await response.json();

        if(response.status !== 200) {
            alert("Incorrect password");
            return;
        }

        const newFolder = new folder(folderName, manager);
        newFolder.createFolderInHTML();
        manager.folders.push(newFolder);
        manager.selectedRoot.folders.push(newFolder);
        newFolder.mongoId = data._id;

    } else {
        alert("Enter a name to create a folder");
    }
}

function setupAddFolder(manager) {
    const createBtn = document.querySelector('#create-folder');
    createBtn.addEventListener('click', function(event) {
        createFolderHandler(event, manager);
    });
}

export default setupAddFolder;
