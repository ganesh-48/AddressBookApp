const addressBookInfoModel = require('../models/addressbookinfo.js');

class AddressBookInfoService {

    /**@Description create method and save address book info
     * @param {*} newAddressBookInfo get data from controller
     * @param {*} callBack is used to callback controller
     */
    create = (newAddressBookInfo, callBack) => {
        addressBookInfoModel.create(newAddressBookInfo, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }

    /**@Description Retrive all the address book info
     * @param {*} callBack is used to callback controller
     */
    findAllAddressBookInfo = (callBack) => {
        addressBookInfoModel.findAllAddressBookInfo((error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }
}

module.exports = new AddressBookInfoService();