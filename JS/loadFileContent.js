// gets a single files content from the db and renders it in the notepad
async function loadFileContent(file) {
    const response = await fetch('http://localhost:3000/api/files/single/' + file.mongoId);
    const data = await response.json();

    // use placeholder if theres no content yet
    file.content = data.content || 'Click Edit to start typing notes...';

    // clear old content and render new
    const noteText = document.getElementById('note-text');
    noteText.innerHTML = '';

    // one div holds all the p tags
    const div = document.createElement('div');
    noteText.appendChild(div);

    // split content on newlines and append a p for each line
    const lines = file.content.split('\n');
    for (const line of lines) {
        const p = document.createElement('p');
        p.textContent = line;
        div.appendChild(p);
    }
}

export default loadFileContent;
