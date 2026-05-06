
function setupNotepad(manager) {
    const editBtn = document.getElementById('edit-note-btn');
    const saveBtn = document.getElementById('save-note-btn');
    const noteText = document.getElementById('note-text');
    const noteEditor = document.getElementById('note-editor');
    const noteArea = document.getElementById('note-area');

    if (!editBtn || !saveBtn || !noteText || !noteEditor || !noteArea) {
        return;

    }

    document.getElementById("edit-note-btn").disabled = false;
    document.getElementById("save-note-btn").disabled = false;


    editBtn.addEventListener('click', () => {
        if(!manager.selectedFile) {
            alert("Select or create a file first");
            return;
        }

        const paragraphs = noteText.querySelectorAll("p");

        let text = "";

        for( let i =0; i < paragraphs.length; i++) {
            text += paragraphs[i].textContent;

            if( i < paragraphs.length - 1) {
                text += "|n";
            }
        }
        noteArea.value = text;
        noteText.style.display = 'none';
        noteEditor.style.display = 'block';
        editBtn.style.display = 'none';
    });

    saveBtn.addEventListener('click', () => {

        if(!manager.selectedFile) {
            alert("Select or create a file first");
            return;
        }
        
        const oldParagraph = noteText.querySelectorAll("div");

        for( let i = 0; i < oldParagraph.length; i++) {
            oldParagraph[i].remove();
        }

        const newP = noteArea.value.split("\n");

        for( let i = 0; i < newP.length; i++) { 
            const div = document.createElement("div");
            const p = document.createElement("p");

            p.textContent = newP[i];
            div.appendChild(p);
            noteText.appendChild(div);
        }
        noteText.style.display = 'block';
        noteEditor.style.display = 'none'; 
        editBtn.style.display = 'inline-block';
    });
}

export default setupNotepad;