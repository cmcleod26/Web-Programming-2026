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

    if (response.status !== 201) {
        alert('Incorrect password');
        return;
    }

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
    for (let i = 0; i < manager.selectedRoot.folders.length; i++) {
        if (manager.selectedRoot.folders[i].mongoId === manager.selectedFolder.mongoId) {
            manager.selectedRoot.folders.splice(i, 1);
            break;
        }
    }

    // clear the selected folder
    manager.selectedFolder = null;
}

function setupDeleteFolder(manager) {
    const deleteBtn = document.querySelector('#delete-folder');
    deleteBtn.addEventListener('click', function(event) {
        deleteFolderHandler(event, manager);
    });
}

export default setupDeleteFolder;
