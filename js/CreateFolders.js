class folder{

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
    event.preventDefault();

    // Stop user before entering if they haven't selected a root folder.
    if (!manager.selectedRoot) {
        alert("Select a root folder first");
        return;
    }

    // Prompt the user to name the folder
    const folderName = prompt('Creating folder in ' + manager.selectedRoot.rootName + '. Enter folder name:');
    folderName.trim();

    // Only create if they typed something
    if (folderName !== '' && folderName && manager.selectedRoot !== null) {

        const newFolder = new folder(folderName, manager);
        newFolder.createFolderInHTML();
        manager.folders.push(newFolder);
        manager.selectedRoot.folders.push(newFolder);

    }else{
        alert("Enter a name to create a folder");
    }
}

function setupAddFolder(manager) {
    const createBtn = document.querySelector('#create-folder'); 
    createBtn.addEventListener('click', function (event) {
        createFolderHandler(event, manager);
    });
}

export default setupAddFolder;