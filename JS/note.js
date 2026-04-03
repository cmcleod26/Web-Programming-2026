
class NotePad {
    constructor() {
    const editBtn = document.getElementById('edit-note-btn');
    const saveBtn = document.getElementById('save-note-btn');
    const noteText = document.getElementById('note-text');
    const noteEditor = document.getElementById('note-editor');
    const noteArea = document.getElementById('note-area');

    setupNotepad()
}

edit() {
    this.noteArea.value = this.noteText.textContent;
    this.noteText.style.display = 'none';
    this.noteEditor.style.display = 'block';
    this.editBtn.style.display = 'none';
}

save() {
    this.noteText.textContent = this.noteArea.value;
    this.noteText.style.display = 'block';
    this.noteEditor.style.display = 'none';
    this.editBtn.style.display = 'block';
}


    
}
export default setupNotepad;