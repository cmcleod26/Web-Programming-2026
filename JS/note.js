
function setupNotepad() {
    const editBtn = document.getElementById('edit-note-btn');
    const saveBtn = document.getElementById('save-note-btn');
    const noteText = document.getElementById('note-text');
    const noteEditor = document.getElementById('note-editor');
    const noteArea = document.getElementById('note-area');

    if (!editBtn || !saveBtn || !noteText || !noteEditor || !noteArea) {
        return;
    }

    editBtn.addEventListener('click', () => {
        noteArea.value = noteText.textContent;
        noteText.style.display = 'none';
        noteEditor.style.display = 'block';
        editBtn.style.display = 'none';
    });

    saveBtn.addEventListener('click', () => {
        noteText.textContent = noteArea.value;
        noteText.style.display = 'block';
        noteEditor.style.display = 'none';
        editBtn.style.display = 'block';
    });
}

export default setupNotepad;