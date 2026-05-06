class RootFolder {

    constructor(rootName, manager) {
        this.rootName = rootName;
        this.manager = manager;
        this.rootbtn = null;

        this.folders = [];
    }

    createRootInHTML() {
        const rootDiv = document.createElement('div');
        rootDiv.className = 'root-' + this.rootName;
        //create the button for the root folder
        this.rootbtn = document.createElement('button');
        this.rootbtn.className = 'root-btn';
        this.rootbtn.innerText = this.rootName;
        //add event listener to set selected root when button is clicked
        this.rootbtn.addEventListener('click', () => {
            this.manager.setSelectedRoot(this);
        });

        rootDiv.appendChild(this.rootbtn);
        document.querySelector('#root-folders').appendChild(rootDiv);
    }
}

function setupRoots(manager) {
    const hardcodedRoots = ['Connor', 'Isabel', 'Cody'];
    // Create root folders from the hardcoded list and add them to the manager
    hardcodedRoots.forEach(name => {
        const newRoot = new RootFolder(name, manager);
        newRoot.createRootInHTML();
        manager.roots.push(newRoot);
    });

}

export default setupRoots;