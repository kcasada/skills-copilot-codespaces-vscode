//Create web server
const express = require('express');
const app = express();
app.use(express.json());

//Create database
const Datastore = require('nedb');
const db = new Datastore('comments.db');
db.loadDatabase();

//Listen for HTTP requests
app.listen(3000, () => console.log('listening at 3000'));

//Serve static files
app.use(express.static('public'));

//Allow cross-origin requests
const cors = require('cors');
app.use(cors