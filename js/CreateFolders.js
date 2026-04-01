class folder{

    constructor(PassedFolderName) {
       this.folderName = PassedFolderName;
    }


    createFolderInHTML(){
        //creating folder div
        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder' + this.folderName;
        const folderbtn = document.createElement('button');

        //creating the button for the folder
        folderbtn.className = 'folder-btn';
        folderbtn.innerText = this.folderName;
        folderDiv.appendChild(folderbtn);

        document.querySelector('#folders').appendChild(folderDiv);

    }
    
}

function createFolderHandler(event) {
    event.preventDefault();

    // Prompt the user to name the folder
    const folderName = prompt('Enter folder name:');

    // Only create if they typed something
    if (folderName && folderName.trim() !== '') {
        const newFolder = new folder(folderName.trim());
        newFolder.createFolderInHTML();
    }
}

function setupAddFolder() {
    const createBtn = document.querySelector('#create-folder'); 
    createBtn.addEventListener('click', createFolderHandler);
}

export default setupAddFolder;