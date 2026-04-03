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

        updateLayout();
    }

    show() {
        this.folder.style.display = 'block';
        this.showButton.innerText = 'show';
        updateLayout();
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

function updateLayout() {
    const folders = document.getElementById('folders');
    const files = document.getElementById('files');
    const root = document.getElementById('root-folders');

    const folderHidden = folders.style.display === 'none';
    const fileHidden = files.style.display === 'none';

    if (fileHidden == true) {
        root.style.width = '225px';
        folders.style.width = '225px';
    }  else if (folderHidden == true ) {
        root.style.width = '225px';
    } else {
        root.style.width = 'var(--width-root-folders)';
        folders.style.width = 'var(--width-folders)';
        files.style.width = 'var(--width-files)';
    }

}

function setupFolderToggles() {
    const folders = new FolderToggle('folders', 'folder-btn', 'folder-show');
    folders.setup();

    const files = new FolderToggle('files', 'file-btn', 'file-show');
    files.setup();

}



export default setupFolderToggles;