const addressBookInfoModel = require('../models/addressbookinfo.js');

class AddressBookInfoService {

    create = (newAddressBookInfo, callBack) => {
        addressBookInfoModel.create(newAddressBookInfo, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }

    findAllAddressBookInfo = (callBack) => {
        addressBookInfoModel.findAllAddressBookInfo((error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }
}

module.exports = new AddressBookInfoService();