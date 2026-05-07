async function deleteFolderHandler(event, manager) {
    event.preventDefault();

    // alert if no folder is selected
    if (!manager.selectedFolder) {
        alert("Select a folder to delete first");
        return;
    }

    const password = prompt('Enter password to delete folder:');

    // send delete request to the backend using the mongoId
    const response = await fetch('http://localhost:3000/api/folders/' + manager.selectedFolder.mongoId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password })
    });

    //check if wrong password
    if (response.status !== 201) {
        alert('Incorrect password');
        return;
    }

    // remove all files belonging to this folder from the DOM and manager.files
    const remainingFiles = [];
    for (let i = 0; i < manager.files.length; i++) {
        if (manager.files[i].folder === manager.selectedFolder) {
            manager.files[i].fileDiv.remove();
        } else {
            remainingFiles.push(manager.files[i]);
        }
    }
    manager.files = remainingFiles;

    // remove the folder div from the DOM
    manager.selectedFolder.folderDiv.remove();

    // remove the folder from manager.folders by finding its mongoId
    for (let i = 0; i < manager.folders.length; i++) {
        if (manager.folders[i].mongoId === manager.selectedFolder.mongoId) {
            manager.folders.splice(i, 1);
            break;
        }
    }

    // remove the folder from selectedRoot.folders by finding its mongoId
    const remainingRootFolders = [];
    for (let i = 0; i < manager.selectedRoot.folders.length; i++) {
        //iterate through and add all folders that dont match the deleted folder to the remainingRootFolders array
        //then set selectedRoot.folders to remainingRootFolders at the end
        if (manager.selectedRoot.folders[i].mongoId !== manager.selectedFolder.mongoId) {
            remainingRootFolders.push(manager.selectedRoot.folders[i]);
        }
    }

    manager.selectedRoot.folders = remainingRootFolders; 
    // clear the selected folder and file
    manager.setSelectedFolder(null);
    manager.setSelectedFile(null);
}

function setupDeleteFolder(manager) {
    const deleteBtn = document.querySelector('#delete-folder');
    deleteBtn.addEventListener('click', function(event) {
        deleteFolderHandler(event, manager);
    });
}

export default setupDeleteFolder;
