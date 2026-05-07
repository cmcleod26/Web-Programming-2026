export class FileItem {
    constructor(fileName, folder, manager) {
        this.fileName = fileName;
        this.folder = folder;
        this.manager = manager;
        this.content = '';
        this.filebtn = null;
        this.fileDiv = null;
        this.rootFolder = this.folder.rootFolder;
    }

    createFileInHTML() {
        const fileDiv = document.createElement("div");
        fileDiv.className = "file";
        this.fileDiv = fileDiv;
        //create the button for the file
        this.filebtn = document.createElement("button");
        this.filebtn.className = "file-btn";
        this.filebtn.innerText = this.fileName;


        this.filebtn.addEventListener("click", () => {
            this.manager.setSelectedFile(this);
        });
        

        document.querySelector("#files").appendChild(fileDiv);
        fileDiv.appendChild(this.filebtn);
    }
}

async function createFileHandler(event, manager) {
    event.preventDefault();
    //Must select a folder before creating a file
    if (!manager.selectedFolder) {
        alert("Select a folder first");
        return;
    }

    const fileName = prompt("Creating file in " + manager.selectedFolder.folderName + ". Enter file name:");
    fileName.trim();
    
    //only create if they typed something;
    if (fileName !== '' && fileName) { 
        const password = prompt('Enter password to save file:');

        console.log("folder mongoId:", manager.selectedFolder.mongoId);
        const response = await fetch('http://localhost:3000/api/files', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: fileName.trim(), folderId: manager.selectedFolder.mongoId, content: '', password: password })
        });
        const data = await response.json();

        if (response.status !== 201) {
            alert("Error: status " + response.status + " - " + data.message);
            return;
        }
        
        const newFile = new FileItem(fileName.trim(), manager.selectedFolder, manager);
        newFile.createFileInHTML();

        newFile.mongoId = data._id;
        //manually set selected file on button creation
        newFile.content = data.content;

        manager.files.push(newFile);
        //manager.setSelectedFile(newFile);
        manager.selectedFolder.files.push(newFile);
    }else{
        alert("Enter a name to create a file");
    }
}

function setupAddFile(manager) {
    const createFileBtn = document.querySelector("#create-file");

    createFileBtn.addEventListener('click', function (event) {
        createFileHandler(event, manager);
    });
}

export default setupAddFile;