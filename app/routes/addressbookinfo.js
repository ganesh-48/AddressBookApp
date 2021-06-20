const addressBookInfo = require('../controller/addressbookinfo.js');

module.exports = (app) => {
    
    // Create a new addressBookInfo
    app.post('/add', addressBookInfo.create);

    // Retrieve all addressBookInfo
    app.get('/getalladdressBookInfo', addressBookInfo.findAllAddressBookInfo);

    // Retrieve a single addressBookInfo with addressBookInfoId
    app.get('/findaddressBookInfo/:addressBookInfoId', addressBookInfo.findOneAddressBookInfo);

    // Update a addressBookInfo with addressBookInfoId
    app.put('/update/addressBookInfo/:addressBookInfoId', addressBookInfo.updateAddressBookInfo);

    /*/ Delete a addressBookInfo with addressBookInfoId
    app.delete('/delete/addressBookInfo/:addressBookInfoId', addressBookInfo.delete);
    */
}