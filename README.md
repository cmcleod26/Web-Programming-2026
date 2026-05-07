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



Also, you will see a folder called node_modules. You can basically ignore this. This alongside .env will not be pushed to git


1. Express - This is our server, it will handle incoming http requests like retrieving folders and such.

We need to write handlers like app.get() and app.post() to define what happens for each request

2. mongoose - This is the bridge to Mongo. Instead of queries we define a schema and a model which gives us methods to read and write data. This way instead of writing queries we can just write Folder.find()

3. dotenv - this just makes it so that when the server starts it reads your .env file and loads everything into process.env. This way our code can handle sensitive information like the Mongo URI without us hardcoding them

4. cors - "stands for Cross Origin Resource Sharing. Browsers have a security rule that blocks a webpage from making requests to a different domain than the one it came from. Since our frontend and backend are on the same its not needed but was when they werent andwere using live server.
