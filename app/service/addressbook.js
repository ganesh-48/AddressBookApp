const addressBookInfoModel = require('../models/addressbook.js');

class AddressBookInfoService {

    create = (newData, callBack) => {
        addressBookInfoModel.create(userData, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }
}