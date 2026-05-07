async function loadFileContent(file) {
    const response = await fetch('http://localhost:3000/api/files/' + file.mongoId);
    const data = await response.json();

    file.content = data.content || '';

    // clear old content and render new
    const noteText = document.getElementById('note-text');
    noteText.innerHTML = '';

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
