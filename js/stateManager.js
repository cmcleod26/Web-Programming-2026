import setupAddFolder from "./CreateFolders.js";
import setupAddFile from "./createFile.js";
import setupRoots from "./setupRoots.js";
//import setupFolderToggles from "./js/toggleFolders.js";


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

        //addes the event lister to the create folder button
        setupAddFolder(this);

        //adds the event listener to the create file button and passes the manager to it.
        setupAddFile(this);

        // Folder toggle wiring is handled from index.js via setupFolderToggles().
        // setupFolderToggles();

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
    }

    setSelectedFile(passedFile){
        if (this.selectedFile) {
            this.selectedFile.filebtn.classList.remove("selected");
        }

        this.selectedFile = passedFile;

        if (this.selectedFolder) {
            //add the selected class to the button of the folder so it can be styled differently when selected
            this.selectedFile.filebtn.classList.add("selected");
        }
    }

    setSelectedRoot(passedRoot){
        if (this.selectedRoot) {
            this.selectedRoot.rootbtn.classList.remove('selected');
        }
        this.selectedRoot = passedRoot;
        if (this.selectedRoot) {
            this.selectedRoot.rootbtn.classList.add('selected');
        }
    }


}

new stateManager();