class FolderToggle {
    constructor(divId, hideButtonId, showButtonId) {
        this.folder = document.getElementById(divId);
        this.hideButton = document.getElementById(hideButtonId);
        this.showButton = document.getElementById(showButtonId);
    }

    hide() {
        if (!this.folder) return;

        this.folder.style.display = 'none';

        if (this.folder.id === 'folders') {
            const files = document.getElementById('files');
            if (files) {
                files.style.display = 'none';
            }
        }

        this.updateButtons();
        updateLayout();
    }

    show() {
        if (!this.folder) return;

        this.folder.style.display = 'block';

        if (this.folder.id === 'folders') {
            // when folders shown, keep files in their previous state (hidden if they were hidden)
        }

        this.updateButtons();
        updateLayout();
    }

    updateButtons() {
        const folders = document.getElementById('folders');
        const files = document.getElementById('files');
        const showFoldersBtn = document.getElementById('show-folders-btn');
        const showFilesBtn = document.getElementById('show-files-btn');

        if (folders && showFoldersBtn) {
            showFoldersBtn.style.display = (folders.style.display === 'none' || window.getComputedStyle(folders).display === 'none') ? 'inline-block' : 'none';
        }

        if (files && showFilesBtn) {
            showFilesBtn.style.display = (files.style.display === 'none' || window.getComputedStyle(files).display === 'none') ? 'inline-block' : 'none';
        }
    }

    setup() {
        if (this.hideButton) {
            this.hideButton.addEventListener('click', () => { this.hide(); });
        }
        if (this.showButton) {
            this.showButton.addEventListener('click', () => { this.show(); });
        }
        this.updateButtons();
    }
    
}

function updateLayout() {
    const folders = document.getElementById('folders');
    const files = document.getElementById('files');
    const root = document.getElementById('root-folders');

    if (!folders || !files || !root) return;

    const folderHidden = window.getComputedStyle(folders).display === 'none';
    const fileHidden = window.getComputedStyle(files).display === 'none';

    if (fileHidden) {
        root.style.width = '225px';
        folders.style.width = '225px';
    } else if (folderHidden) {
        root.style.width = '225px';
    } else {
        root.style.width = 'var(--width-root-folders)';
        folders.style.width = 'var(--width-folders)';
        files.style.width = 'var(--width-files)';
    }

}

function setupFolderToggles() {
    const folders = new FolderToggle('folders', 'hide-folders-btn', 'show-folders-btn');
    folders.setup();

    const files = new FolderToggle('files', 'hide-files-btn', 'show-files-btn');
    files.setup();

}



export default setupFolderToggles;