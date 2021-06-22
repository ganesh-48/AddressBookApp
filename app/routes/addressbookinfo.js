const addressBookInfo = require('../controller/addressbookinfo.js');
const userInfo = require('../controller/userinfo.js');
const validate = require('../middleware/helper.js');

module.exports = (app) => {
    
    // Create a new addressBookInfo
    app.post('/add', validate.checkToken, addressBookInfo.create);

    // Retrieve all addressBookInfo
    app.get('/getalladdressBookInfo', validate.checkToken, addressBookInfo.findAllAddressBookInfo);

    // Retrieve a single addressBookInfo with addressBookInfoId
    app.get('/findaddressBookInfo/:addressBookInfoId', validate.checkToken, addressBookInfo.findOneAddressBookInfo);

    // Update a addressBookInfo with addressBookInfoId
    app.put('/update/addressBookInfo/:addressBookInfoId', validate.checkToken, addressBookInfo.updateAddressBookInfo);

    // Delete a addressBookInfo with addressBookInfoId
    app.delete('/delete/addressBookInfo/:addressBookInfoId', validate.checkToken, addressBookInfo.deleteAddressBookInfo);

    // Create a new userInfo user
    app.post('/add/userinfo', userInfo.create);

    //Userlogin with a userInfoId and password
    app.post('/userlogin', userInfo.login);
}