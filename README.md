# Trifolio

## What is it

Trifolio is a personal notes app. It has three hardcoded users Connor, Cody, and Isabel each with their own folders and files. You can create and delete folders and files, write notes in a notepad panel, and save everything to a MongoDB database. The UI is a three column layout users on the left, then folders, then files, with a notepad taking up the rest of the screen.

Built with vanilla JavaScript on the frontend and an Express + MongoDB backend.

## How to run

**Requirements:**
- Node.js installed
- A `.env` file inside the root folder with the following:
```
MONGO_URI=your_mongodb_connection_string
CODY_PASSWORD=your_password
CONNOR_PASSWORD=your_password
ISABEL_PASSWORD=your_password
and PORT=3000
```

**Install dependencies** (first time only):
```
npm install
```

**Start the server:**
```
node server/server.js
```

Then open `http://localhost:3000` in your browser.

## Code structure

```
Web-Programming-2026/
- index.html          the main page served by express
- CSS/styles.css      all the styles for the app
- js/                 all the frontend javascript
- server/             the express backend
  - server.js         starts the app and connects to mongodb
  - routes/           api route handlers for folders and files
  - models/           mongoose schemas for folders and files
```

the frontend lives entirely in js/ as js files
stateManager.js is the center of it all it holds which root folder and files are selected and wires up all the other modules on page load

when the page loads stateManager pulls all folders from the db for all three users and renders them hidden then shows them when a user clicks a root when a folder is clicked it fetches its files from the db when a file is clicked it fetches its content and shows it in the notepad

the backend is a simple express rest api in server/routes all write and delete routes check a per user password before doing anything to the db
