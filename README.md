## Project code for csc324 (Trifolio) .
-------------------------------------------------------------------------------------------------
Updated: 3/24/2026
## To Do
### Backend
- [ ] Test all API routes with Postman
      
### Frontend
- [ ] Set up React app in client/ folder
- [ ] Build root folder column (Connor, Cody, Isabel hardcoded)
- [ ] Build folder column (fetches from GET /api/folders/:owner)
- [ ] Build file column (fetches from GET /api/files/:folderId)
- [ ] Build note pad (displays and edits file content)
- [ ] Build commit button with password prompt
- [ ] Connect all frontend actions to API routes

### Hosting
- [ ] Deploy Express backend to Render
- [ ] Deploy React frontend to GitHub Pages
-------------------------------------------------------------------------------------------------
# 3/24/2026
API Examples: (We can also C+P these later)
// get all folders for a user
```ruby
async function getFolders(owner) {
      const response = await fetch(`http://localhost:5000/api/folders/${owner}`);
      const folders = await response.json();
      console.log(folders);
      return folders;
}
```
-------------------------------------------------------------------------------------------------
# 3/17/2026
### added 4 packages
to install these on your machine:
First: make sure you have Node.js installed. You will be using npm which is the package manager.

Also you can run 'npm -v' to see if Node.js is installed

Second: just run 'npm install', this will read teh package.json folder and install the correct stuff

(Just ignore package-lock.json) It's like boring package semantics I think

It will say it installed 85 things, these are the 4 packages and their dependencies


Also, you will see a folder called node_modules. You can basically ignore this. This alongside .env will not be pushed to git


1. Express - This is our server, it will handle incoming http requests like retrieving folders and such.

We need to write handlers like app.get() and app.post() to define what happens for each request

2. mongoose - This is the bridge to Mongo. Instead of queries we define a schema and a model which gives us methods to read and write data. This way instead of writing queries we can just write Folder.find()

3. dotenv - this just makes it so that when the server starts it reads your .env file and loads everything into process.env. This way our code can handle sensitive information like the Mongo URI without us hardcoding them

4. cors - ai explanation: "stands for Cross Origin Resource Sharing. Browsers have a security rule that blocks a webpage from making requests to a different domain than the one it came from. Since your React frontend and Express backend run on different ports locally, the browser would block their communication without this. cors tells the browser "this is allowed."
-------------------------------------------------------------------------------------------------
