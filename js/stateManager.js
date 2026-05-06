import setupAddFolder from "./CreateFolders.js";
import setupAddFile from "./createFile.js";
import setupRoots from "./setupRoots.js";
import loadAllFolders from "./loadFolders.js";

class stateManager {
    constructor() {
        this.roots = [];
        this.selectedRoot = null;

        this.folders = [];
        this.selectedFolder = null;

        this.files = [];
        this.selectedFile = null;

        //setup root folders
        setupRoots(this);

        //load all folders from the database on startup
        loadAllFolders(this);

        //addes the event lister to the create folder button
        setupAddFolder(this);

        //adds the event listener to the create file button and passes the manager to it.
        setupAddFile(this);
    }

    setSelectedFolder(passedFolder) {
        if (this.selectedFolder) {
            this.selectedFolder.folderbtn.classList.remove("selected");
        }

        this.selectedFolder = passedFolder;

        if (this.selectedFolder) {
            //add the selected class to the button of the folder so it can be styled differently when selected
            this.selectedFolder.folderbtn.classList.add("selected");
        
        }

        // Show only this folder's files, hide everything else
        this.files.forEach(f => f.fileDiv.style.display = 'none');
        if (passedFolder) {
            passedFolder.files.forEach(f => f.fileDiv.style.display = 'block');
        }
    }

    setSelectedFile(passedFile) {
        if (this.selectedFile) {
            this.selectedFile.filebtn.classList.remove("selected");
        }

        this.selectedFile = passedFile;

        if (this.selectedFolder) {
            //add the selected class to the button of the folder so it can be styled differently when selected
            this.selectedFile.filebtn.classList.add("selected");
        }
    }

    setSelectedRoot(passedRoot) {
        if (this.selectedRoot) {
            //remove the selected class from the button of the root so it can be styled differently when not selected
            this.selectedRoot.rootbtn.classList.remove('selected');
        }

        this.selectedRoot = passedRoot;
        
        //add the selected class to the button of the root so it can be styled differently when selected
        if (this.selectedRoot) {
            this.selectedRoot.rootbtn.classList.add('selected');
        }

        // Show only this root's folders, hide everything else
        this.folders.forEach(f => f.folderDiv.style.display = 'none');
        if (passedRoot) {
            passedRoot.folders.forEach(f => f.folderDiv.style.display = 'block');
        }

        // Switching roots clears the file view too
        this.files.forEach(f => f.fileDiv.style.display = 'none');
        this.selectedFolder = null;
    }
}

new stateManager();
