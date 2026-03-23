require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
/*
app is our express application
this is how we define routes, middleware and start the server
*/ 

app.use(cors());
app.use(express.json());

const folderRoutes = require('./server/routes/fodlerRoutes');
app.use('/api/folders', folderRoutes)

const PORT = process.env.PORT || 5000; //default value = 5000
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connected to MongoDB', error);
    });
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




