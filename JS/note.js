
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


    // edit btn grabs existing text and loads into textarea
    editBtn.addEventListener('click', () => {
        if(!manager.selectedFile) {
            alert("Select or create a file first");
            return;
        }

        const paragraphs = noteText.querySelectorAll("p");

        // clear placeholdder text before loading into editor
        if(paragraphs[0].textContent === "Click Edit to start typing notes...") {
            paragraphs[0].textContent = "";
        }

        

        let text = "";

        for( let i =0; i < paragraphs.length; i++) {
            text += paragraphs[i].textContent;

            if( i < paragraphs.length - 1) {
                text += "\n";
            }
        }
        noteArea.value = text;
        noteText.style.display = 'none';
        noteEditor.style.display = 'block';
        editBtn.style.display = 'none';
    });

    // save btn saves content to db and re renders the notepad
    saveBtn.addEventListener('click', async () => {

        if(!manager.selectedFile) {
            alert("Select or create a file first");
            return;
        }
        const password = prompt('Enter password to save:');

        //split the text area value into an array of paragraphs
        const newP = noteArea.value.split("\n");
        const content = noteArea.value;

        //remove all the old paragraphs from the note text
        const oldParagraph = noteText.querySelectorAll("div");

        for( let i = 0; i < oldParagraph.length; i++) {
            oldParagraph[i].remove();
        }

        
        //send a put request to the backend to update the content of the file in the database using the mongoId of the file and the password provided by the user
        const response = await fetch('/api/files/' + manager.selectedFile.mongoId,{                                                                            
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },                      
          body: JSON.stringify({ content: content, password: password, owner: manager.selectedRoot.rootName })
        }); 

        //check if the response is not ok and alert the user if there was an error saving
        if (response.status !== 200) {                                            
          const data = await response.json();           
          alert('Error saving: ' + data.message);    
                                     
        }

        //create new paragraphs in the note text for each paragraph in the text area
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

        manager.selectedFile.content = content;                                   
                                                                                
        
                                                                             
  
        
    });

    const div = document.createElement("div");
    const p = document.createElement("p");
        
    p.textContent ="No File Selected";

    div.appendChild(p);
    noteText.appendChild(div);
}

export default setupNotepad;