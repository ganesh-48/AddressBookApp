require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {

    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose.connect(process.env.URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}