// folder class holds all the info for a single folder
class folder {

    constructor(PassedFolderName, Manager) {
        this.folderName = PassedFolderName;
        this.files = [];
        this.manager = Manager;
        this.folderbtn = null;
        this.folderDiv = null;
        // set the root this folder belongs to
        this.rootfolder = Manager.selectedRoot;
        this.mongoId = null;
    }

    createFolderInHTML() {
        // build the div and button then append to the folders column
        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder' + this.folderName;
        this.folderDiv = folderDiv;

        this.folderbtn = document.createElement('button');
        this.folderbtn.className = 'folder-btn';
        this.folderbtn.innerText = this.folderName;
        this.folderbtn.addEventListener('click', () => {
            this.manager.setSelectedFolder(this);
        });

        folderDiv.appendChild(this.folderbtn);
        document.querySelector('#folders').appendChild(folderDiv);
    }
}

export default folder;
