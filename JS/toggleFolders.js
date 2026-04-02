class FolderToggle {
    constructor(divId, hideButtonId, showButtonId) {
        this.folder = document.getElementById(divId);
        this.hideButton = document.getElementById(hideButtonId);
        this.showButton = document.getElementById(showButtonId);
    }

    hide() {
        this.folder.style.display = 'none';
        this.hideButton.innerText = 'hide';

        if(this.folder.id === 'folders') {
            const folderDiv = document.getElementById('files');
            if(folderDiv) {
                folderDiv.style.display = 'none';
            }    
        }

        //updateLayout();
    }

    show() {
        this.folder.style.display = 'block';
        this.showButton.innerText = 'show';
        //updateLayout();
    }

    setup() {
        if(this.hideButton) {
            this.hideButton.addEventListener('click', () => { this.hide(); });
        }
        if(this.showButton) {
            this.showButton.addEventListener('click', () => { this.show(); });
        }
    }
    
}

// function updateLayout() {
//     const folders = document.getElementById('folders');
//     const files = document.getElementById('files');
//     const rootFolder = document.getElementById('root-folders');

//     const folderHidden = folders.style.display === 'none';
//     const fileHidden = files.style.display === 'none';

//     if (folderHidden) {
//         rootFolder.style.width = '300px';
//     } else {
//         rootFolder.style.width = '200px';
//     }

//     if (!folderHidden && fileHidden) {
//         folders.style.width = '400px';
//     } else if (!folderHidden && !fileHidden) {
//         folders.style.width = '200px';
//     }
// }

function setupFolderToggles() {
    const folders = new FolderToggle('folders', 'folder-btn', 'folder-show');
    folders.setup();

    const files = new FolderToggle('files', 'file-btn', 'file-show');
    files.setup();

}



export default setupFolderToggles;