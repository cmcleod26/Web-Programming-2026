function createFolder(name) {

    const folder = document.createElement('div');
    folder.className = 'folder';
    folder.innerText = name;
    document.querySelector('#folders').appendChild(folder);



}

function createFolderhandler(event){
    event.preventDefault();

}

function setup() {
    document.querySelector("#create-folder").addEventListener("click", createFolderhandler);
}

export default setup;