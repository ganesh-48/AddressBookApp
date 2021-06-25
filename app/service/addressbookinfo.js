const addressBookInfoModel = require('../models/addressbookinfo.js');
const logger = require('../../config/logger.js');

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

    /**
     * @Description retrive the address book info 
     * @param {*} addressBookInfoId 
     * @param {*} callBack  is used to callback the controller 
     */
    findaddressBookInfoId = (addressBookInfoId, callBack) => {
        addressBookInfoModel.findaddressBookInfoId(addressBookInfoId, (error, data) => {
            logger.info("service->", data);
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }

    /**
   * @description find address book info by Id and update the addressbookinfo
   * @param newAddressBookInfo is data sent from Controller
   * @return callback is used to callback Controller
   */
    findAddressBookInfoIdAndUpdate = (newAddressBookInfo, addressBookInfoId, callBack) => {
        addressBookInfoModel.findAddressBookInfoIdAndUpdate(newAddressBookInfo, addressBookInfoId, (error, data) => {
            logger.info("service->", data);
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }

      /**
   * @description delete address book info using address book info id
   * @return callback is used to callback Controller
   */
    findAddressBookInfoIdAndRemove = (addressBookInfoId, callBack) => {
        addressBookInfoModel.findAddressBookInfoIdAndRemove(addressBookInfoId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }
}

module.exports = new AddressBookInfoService();