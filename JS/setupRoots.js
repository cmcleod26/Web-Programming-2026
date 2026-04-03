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

        this.rootbtn = document.createElement('button');
        this.rootbtn.className = 'root-btn';
        this.rootbtn.innerText = this.rootName;

        this.rootbtn.addEventListener('click', () => {
            this.manager.setSelectedRoot(this);
        });

        rootDiv.appendChild(this.rootbtn);
        document.querySelector('#root-folders').appendChild(rootDiv);
    }
}

function setupRoots(manager) {
    const hardcodedRoots = ['Connor', 'Isabel', 'Cody'];

    hardcodedRoots.forEach(name => {
        const newRoot = new RootFolder(name, manager);
        newRoot.createRootInHTML();
        manager.roots.push(newRoot);
    });

}

export default setupRoots;