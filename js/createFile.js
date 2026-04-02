class FileItem {
    constructor(fileName, folder, manager) {
        this.fileName = fileName;
        this.folder = folder;
        this.manager = manager;
        this.filebtn = null;
    }

    createFileInHTML() {
        const fileDiv = document.createElement("div");
        fileDiv.className = "file";

        this.filebtn = document.createElement("button");
        this.filebtn.className = "file-btn";
        this.filebtn.innerText = this.fileName;


        this.filebtn.addEventListener("click", () => {
            this.manager.setSelectedFile(this);
        });
        //manually set seleected file on creation
        this.manager.setSelectedFile(this);

        document.querySelector("#files").appendChild(fileDiv);
        fileDiv.appendChild(this.filebtn);
    }
}

function createFileHandler(event, manager) {
    event.preventDefault();

    if (!manager.selectedFolder) {
    alert("Select a folder first");
    return;
    }

    const fileName = prompt("Enter file name");
    fileName.trim();
    
    //only create if they typed something;
    if (fileName !== '' && fileName) { 
        const newFile = new FileItem(fileName.trim(), manager.selectedFolder, manager);
        newFile.createFileInHTML();

        manager.files.push(newFile);
        manager.selectedFolder.files.push(newFile);
    }
}

function setupAddFile(manager) {
    const createFileBtn = document.querySelector("#create-file");

    createFileBtn.addEventListener('click', function (event) {
        createFileHandler(event, manager);
    });
}

export default setupAddFile;