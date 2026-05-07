async function deleteFileHandler(event, manager) {
    event.preventDefault();

    if (!manager.selectedFile) {
        alert("Select a file to delete first");
        return;
    }

    const password = prompt('Enter password to delete file:');

    // send delete to db
    const response = await fetch('http://localhost:3000/api/files/' + manager.selectedFile.mongoId, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: password, owner: manager.selectedRoot.rootName })
    });

    if (response.status !== 200) {
        alert('Incorrect password');
        return;
    }

    // remove the file div from the DOM
    manager.selectedFile.fileDiv.remove();

    // remove from manager.files
    for (let i = 0; i < manager.files.length; i++) {
        if (manager.files[i].mongoId === manager.selectedFile.mongoId) {
            manager.files.splice(i, 1);
            break;
        }
    }

    // remove from the selected folder's files array
    for (let i = 0; i < manager.selectedFolder.files.length; i++) {
        if (manager.selectedFolder.files[i].mongoId === manager.selectedFile.mongoId) {
            manager.selectedFolder.files.splice(i, 1);
            break;
        }
    }

    // clear selected file after deletion
    manager.selectedFile = null;
}

function setupDeleteFile(manager) {
    const deleteBtn = document.querySelector('#delete-file');
    deleteBtn.addEventListener('click', function(event) {
        deleteFileHandler(event, manager);
    });
}

export default setupDeleteFile;