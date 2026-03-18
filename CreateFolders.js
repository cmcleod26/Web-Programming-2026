class folder{



    constructor(containerElement, PassedFolderName) {
        const containerElement = containerElement;
        const folderDiv = document.createElement('div');
        folderDiv.className = 'folder';
        folderDiv.innerText = PassedFolderName;
        document.querySelector('#folders').appendChild(folderDiv);
        this.createFolderInHTML = this.createFolderInHTML.bind(this);


        document.querySelector("#create-folder").addEventListener("click", this.createFolderhandler());

    }

    createFolderhandler(event){
        event.preventDefault();
        this.createFolderInHTML();
    }

    createFolderInHTML(){
        const folderButton = this.document.createElement("button");
        folderButton.classList.add("Folder-Button");
        button.type = "button";
        button.textContent = this.PassedFolderName;
        document.querySelector(this.folderDiv).appendChild(folderButton)


    }
    
}
export default setup;