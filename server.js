const express = require('express');
const dbConfig = require('./config/database.js');

// create express app
const app = express();

//connect to database
dbConfig();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(express.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Address Book App application."});
});

// listen for requests
app.listen(7000, () => {
    console.log("Server is listening on port 7000");
});