import folder from "./Folder.js";

<<<<<<< Updated upstream
async function createFolderHandler(event, manager) {
=======
    constructor( PassedFolderName, Manager) {
       this.folderName = PassedFolderName;
       this.files = [];
       this.manager = Manager
       this.folderbtn = null;
       this.folderDiv = null;
       this.rootfolder = Manager.selectedRoot;
    }
    


    createFolderInHTML(){
        //creating folder div
        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder' + this.folderName;
        this.folderDiv = folderDiv
        

        //creating the button for the folder
        this.folderbtn = document.createElement('button');
        this.folderbtn.className = 'folder-btn';
        this.folderbtn.innerText = this.folderName;
        //add event listener to set slected folder when button is clicked
        this.folderbtn.addEventListener('click', () => {
            this.manager.setSelectedFolder(this);
        })
        //manually set selected folder on created just this once
        this.manager.setSelectedFolder(this);

        folderDiv.appendChild(this.folderbtn);

        document.querySelector('#folders').appendChild(folderDiv);

    }
    
}

function createFolderHandler(event, manager) {
>>>>>>> Stashed changes
    event.preventDefault();

    if (!manager.selectedRoot) {
        alert("Select a root folder first");
        return;
    }

    const folderName = prompt('Creating folder in ' + manager.selectedRoot.rootName + '. Enter folder name:');
    folderName.trim();

    if (folderName !== '' && folderName && manager.selectedRoot !== null) {

        const password = prompt('Enter password to save folder:');

        const newFolder = new folder(folderName, manager);
        newFolder.createFolderInHTML();
        manager.folders.push(newFolder);
        manager.selectedRoot.folders.push(newFolder);

        const response = await fetch('http://localhost:5000/api/folders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: folderName, owner: manager.selectedRoot.rootName, password: password })
        });
        const data = await response.json();
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
