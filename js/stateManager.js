import setupAddFolder from "./CreateFolders.js";
import setupDeleteFolder from "./DeleteFolders.js";
import setupAddFile from "./createFile.js";
import setupRoots from "./setupRoots.js";
import loadAllFolders from "./loadFolders.js";
//import setupFolderToggles from "./js/toggleFolders.js";
import setupNotepad from "./note.js";
import loadFilesForFolder from "./loadFiles.js";
import setupDeleteFile from "./DeleteFiles.js";

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

        //adds the event listener to the delete folder button
        setupDeleteFolder(this);

        //adds the event listener to the create file button and passes the manager to it.
        setupAddFile(this);

        // Folder toggle wiring is handled from index.js via setupFolderToggles().
        // setupFolderToggles();

        setupNotepad(this);

        setupDeleteFile(this);
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

        // Load files from database if not already loaded
        if (passedFolder && passedFolder.files.length === 0) {
            loadFilesForFolder(passedFolder, this);
        }
    }

    setSelectedFile(passedFile) {
        if (this.selectedFile) {
            this.selectedFile.filebtn.classList.remove("selected");
        }

        this.selectedFile = passedFile;

        const noteText = document.getElementById("note-text");
        if(noteText.textContent.includes("No File Selected")) {

            noteText.textContent = "";
            const div = document.createElement("div");
            const p = document.createElement("p");
        
            p.textContent ="Type notes here...";

            div.appendChild(p);
            noteText.appendChild(div);
        }

        if (this.selectedFolder) {
            //add the selected class to the button of the folder so it can be styled differently when selected
            this.selectedFile.filebtn.classList.add("selected");

            document.getElementById("edit-note-btn").disabled = false;
            document.getElementById("save-note-btn").disabled = false;
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
