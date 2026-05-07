## Js files for csc324 (Trifolio)
----------------------------------------

## createFiles.js
This file handles creating new files inside the selected folder.

### FileItem class
Represent one file in the program

### constructor(fileName, folder, manager)
- [ ] Stores the file name, the folder the file belongs to, and the state manager
- [ ] it also creates a property for the file button and file div

### createFileInHTML()
- [ ] Creates the files HTML elements. Making the div and a button for the file
- [ ] adds the file name to the button and appends it to the #files section 
- [ ] adds click event listener so that when the file button is clicked, the file becomes the selected file

### createFileHandler(event, manager)
- [ ] first checks if a folder is selected
- [ ] askes the user for a file name, creates a new 'FileItem'
- [ ] adds it to the page, selectes it and stores it in manager.files and in the manager.selected files

### setupAddFile(manager)
- [ ] finds the #create-file and stores it into the the createFileBtn
- [ ] adds a click event listener that calls the createFileHandler() method
----------------------------------------
## CreateFolders.js
This file handles creating new folders inside the selected root folders

### async createFolderHandler (event, manager)
- [ ] runs when the create folder button is clicked
- [ ] checks if root folder is selected, asks user for folder name and then password
- [ ] sends POST request to the backend to save
- if password is correct, the folder is saved and creates a new folder object
- adds it to the selected folder list and makes it the selected folder 
- [ ] if password is incorrect, an alert is sent

### setupAddFolder(manager)
- [ ] finds the #create-folder and stores it into the the createBtn
- [ ] adds a click event listener that calls the createFolderHandler() method

----------------------------------------
## DeleteFolders.js
handles deleting the currently selected folder

### deleteFolderHandler(event, manager)
- [ ] runs when the delete button is clicked 
- [ ] checks if a folder is selected
- if no folder is selected an alert is sent
- [ ] if a folder is selected, a prompt for a password appears
- if password incorrect, an alert is sent
- [ ] if password is correct, sends DELETE request to the selected folder 
- [ ] removes the folder from the HTML
- [ ] removes the folder from selectedFolders via mongoId
- [ ] clears manager.selectedFolder

### setupDeleteFolder(manager)
- [ ] finds the #delete-folder and stores it into the the deleteBtn
- [ ] adds a click event listener that calls the deleteFolderHandler() method

----------------------------------------
## DeleteFiles.js
handles deleting the currently selected file

### deleteFileHandler(event, manager)
- [ ] runs when the delete button is clicked 
- [ ] checks if a file is selected
- if no files is selected an alert is sent
- [ ] if a file is selected, a prompt for a password appears
- if password incorrect, an alert is sent
- [ ] if password is correct, sends DELETE request to the selected files 
- [ ] removes the file from the HTML
- [ ] removes the file from selectedFolders via mongoId
- [ ] clears manager.selectedFile

### setupDeleteFile(manager)
- [ ] finds the #delete-file and stores it into the the deleteBtn
- [ ] adds a click event listener that calls the deleteFilerHandler() method

----------------------------------------
## Folder.js
used for the reguar folders inside each of the root folder

### folder class 
represents a folder

### constructor(PassedFolderName, Manager)
- [ ] Stores the folder name, state manager, the folders files array, the root folder, placeholder for the folder button, folder div, and mongoDB Id

### createFolderInHTML()
- [ ] creates the folder in HTML
- [ ] makes a div and a button with the folder name
- [ ] appends it to the #fodlers section
- [ ] adds click event listener event to the folder button, running manager.setSelectedFolder

----------------------------------------
## loadFolders.js
loads the folders 

 ### async loadAllFolders(manager)
 - [ ] grabs the saved folders for the owners: Connor, Isabel, Cody
 - [ ] for each folder returned from MongoDB a new foldder object is created
 - [ ] connects to the correct root folder, creates HTML 
 - [ ] adds it to both manager.folders and the matching rootFolder array

----------------------------------------
## loadFiles.js
loads the files

### asyc loadFilesForFolder(folder, manager) 
- [ ] sends a fetch request using the folders mongoId
- [ ] returns the files saved in that folder
- [ ] for every file returned, a new FileItem is created
- [ ] displaying the file in the HTML
- [ ] saves the mongoId in the new file 
- [ ] adds it to the manager.files, which then adds the file to the folders file array 

----------------------------------------
## note.js
controls the notepad area for editing and saving

### setupNotepad(manager)
- [ ] finds the edit button, save button, note display area, note editor, and text area
- [ ] edit and save buttons are enabled

### edit button event listener
- [ ] runs when edit button is clicked
- [ ] checks if a file is selected first
- [ ] copies the cirrent note text into the text area, hides the displayed note, hides the edit button

### save button event listener
- [ ] runs when the save button is clicked
- [ ] checks that a file is selcted
- [ ] removes the old text, creates new paragraph elements for each line
- [ ] displays the updated notes

----------------------------------------
## setUpRoots.js
cretes the main root folders

### RootFolder class
represents the root folders for Connor, Isabel, or Cody

### constructor(rootName, manager)
- [ ] stores the root folders name, state manager, a root button placeholder
- [ ] array of folders that belong to this root

### createRootInHTML() 
- [ ] creates the root folders HTML button and appends it to the #root-folders section
- click event listener is added so when the folder is clicked, it becomes the selected folder
- [ ] appends the root button to the div, and then the div to the #root-folders

### setupRoots(manager)
- [ ] hard codes each of the root folders: Connor, Isabel, Cody
- [ ] each new root folder is displayed and calls the createRootInHTML method
- [ ] adds each new root to manager.roots

----------------------------------------
## stateManager.js
main control center of the program, calls all the setup functions

### stateManager Class 
- [ ] stores all roots, folders, files, and which root, folder, and file that are currently selected
- [ ] then it calls the setup functions for the program:
- setupRoots(this)
- loadAllFolders(this)
- setupAddFolder(this)
- setupDeleteFolder(this)
- setupAddFile(this)`
- setupNotepad(this)

### setSelectedFolder(passedFolder)
- [ ] changes the currently selected folder
- [ ] removes the styling for selected folder
- [ ] updates manager.selectedFolder
- [ ] adds the selected styling to the new selected folder
- [ ] hides the files correlated to the previously selected folder
- [ ] shows the files correlated to the new selected folder

### setSelectedFile(passedFile)
- [ ] changes the currently selected file
- [ ] removes the styling for the currently selected file 
- [ ] updates the manager.selectedFile
- [ ] clears no file selected message in the notepad, if needed 
- [ ] updates the starting note text
- [ ] adds styling to the newly selected file
- [ ] enables the edit and save buttons

### setSelectedRoot(passedRoot)
- [ ] changes the currently selected root folder
- [ ] removes the styling for the currently selected root folder
- [ ] updates manager.selectedRoot
- [ ] adds the styling to the newly selected root folder
- [ ] hides all the folders related to the previous root
- [ ] shows only the folders related to the selected root folder
- also clears the selected folder
### new stateManager()
starts the program by creating a new state manager object

----------------------------------------
## toggleFolders.js
controls hiding and showing the folder and files panel

### FolderToggle class 
contains the constructor and methods to toggle the folders or files section

### constructor(divId, hideButtonId, showButtonId)
- [ ] stores the section being toggled, the hide button, and the show button

### hide()
- [ ] Hides the selected section
- [ ] if the folders section is hidden, it also hides the files section
- [ ] then the buttons and page layout is updates 
- [ ] of the files section alone is hidden, then layout is updated for the folders, root folders, and notepad area

### show()
- [ ] shows the selected section again
- [ ] if the folders are hidden and then shown again, the files tab doesn't show again unless show button is clicked again
- [ ] updates layout depending on what is shown and what is still hidden

### updateButtons()
- [ ] checks whether folder or files are hidden or shown
- [ ] hides or shows the correct buttons in the correct sections

### setup()
- [ ] adds a click event listener for the hidden button, calling the hide method
- [ ] adds a click event listener for the show button, calling the show method
- [ ] calls updateButtons() method

### updateLayout
- [ ] adjusts the width of the root, folder, and files sections depending on which sections are visible or not

### setupFolderToggles()
- [ ] creates two toggle elements, on for folders and one for files
- [ ] each creating the necessary buttons for each tab
- [ ] calls the setup() method for both to create the event listeners

----------------------------------------
## loadFileContent.js
- [ ] loads and displays the content of the selected file

### async loadFileContent(file)
- [ ] sends a fetch request for the file using the mongoId and retireves the saved note content
- [ ] stores the content in file.content
- [ ] if the file has no saved content, out a default message "click edit to start typing notes..."
- [ ] clears the old note content from #note-text
- [ ] creates a new div, splits the file content into lines
- [ ] creates a new p element so that the note displays correctly in the notepad area

----------------------------------------

# Server js files

## FileSchema.js


----------------------------------------
## FolderSchema.js


----------------------------------------
## fileRoutes.js


----------------------------------------
## folderRoutes.js


----------------------------------------
## server.js


----------------------------------------
----------------------------------------

# control flow

# index.html
The code starts in index.html inside the <script type ="module"> tag, which is in the <head> This script tag runs before the body is rendered and does two things
- imports the stateManager.js, which calls itself at the end of the file and creates a new stateManager()
- imports setupFolderToggles() from toggleFolders.js and calls it

# stateManager called
when stateManager is called it runs the constructor which starts up the whole sequence within the program, running in this order:

- setupRoots(this)
- [ ] creates the Connor, Isabel, Cody root buttons in the DOM and adds click event listeners to each

- loadAllFolders(this)
- [ ] sends a fetch request to the backend and loads all the saved folders into the DOM

- setupAddFolder(this)
- [ ] makes a click event listener to the create folder button

- setupDeleteFolder(this)
- [ ] makes a click event listener to the delete folder button

- setupAddFile(this);
- [ ] makes a click event listener to the create file button

- setupNotepad(this);
- [ ] makes a click event listener to the edit note button and the save note button

- edit button
- [ ] located in the note.js, and allows for the note pad to be edited after a file has been made
- save button
- [ ] located in the note.js, pressed after the edit button and edits are made. Updates are saved to the notepad and the server

- setupDeleteFile(this);
- [ ] makes a click event listener to the delete file button

## after the constructor finished, we return to the <script> tag and the setupFolderToggles is called

# setupFolderToggles called
when the setupFolderToggles is called, the setup() function is called

- setup()
- [ ] creates event listeners for both methods hide() and show()
- [ ] creating two instances of the FolderToggle class
- [ ]and then calls the updateButtons() method

- updateButtons()
- [ ] when this is called, it determines which buttons are to visible in the Folders and Files panel

- hide()
when an instance of the class is made, the hide button is given an event listener
- [ ] present in the Folder and Files tab
- [ ] hides necessary tabs if called
- show()
when an instance of the class is made, the show button is given an event listener
- [ ] present in the Folder and Files tab
- [ ] shows the selected tabs if called

- updateLayout() 
update layout is called after every event listener
- [ ] updates the layout depending which button is clicked, resizing the root, folder, and files column accordingly