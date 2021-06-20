const mongoose = require('mongoose');

module.exports = () => {
    const url = 'mongodb://localhost:27017/addressBookInfo';

    mongoose.Promise = global.Promise;

    // Connecting to the database
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}