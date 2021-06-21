const mongoose = require('mongoose');

const AddressBookInfoSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validation: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    lastName: {
        type: String,
        required: true,
        validation: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    address: {
        type: String,
        required: true,
        validation: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    city: {
        type: String,
        required: true,
        validation: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    state: {
        type: String,
        required: true,
        validation: /^[A-Z]{1}[A-Za-z\\s]{1,}$/
    },
    zipCode: {
        type: Number,
        required: true,
        validation:  /@"^\d{6}$/
    },
    phoneNumber: {
        type: Number,
        required: true,
        validation:  /@"^\d{10}$/
    },
    emailId: {
        type: String,
        required: true,
        validation: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    }
}, {
    timestamps: true
});

const AddressBookInfo = mongoose.model('AddressBookInfo', AddressBookInfoSchema);

class AddressBookInfoModel {

    /**@Description create method to save address book info
     * @param {*} newAddressBookInfo is send to service
     * @param {*} callBack is used to callback service
     */
    create = (newAddressBookInfo, callBack) => {
        const addressBookInfo = new AddressBookInfo ({
            firstName: newAddressBookInfo.firstName,
            lastName: newAddressBookInfo.lastName,
            address: newAddressBookInfo.address,
            city: newAddressBookInfo.city,
            state: newAddressBookInfo.state,
            zipCode: newAddressBookInfo.zipCode,
            phoneNumber: newAddressBookInfo.phoneNumber,
            emailId: newAddressBookInfo.emailId            
        });
        addressBookInfo.save({}, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /**@Description Retrive all the address book info from mongoDB
     * @return callback is used to callback the services
     */
    findAllAddressBookInfo = (callBack) => {
        AddressBookInfo.find({}, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }

    /**@Description  retrive the address book info of one user find by using addressBookInfoId 
     * @param {*} addressBookInfoId 
     * @param {*} callBack is used to callback the service
     */
    findaddressBookInfoId = (addressBookInfoId, callBack) => {
        AddressBookInfo.findById(addressBookInfoId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, error);
        })
    }
    
    /**
     * @description Update the address book info by using a address book info id
     * @param newAddressBookInfo NewAddressBookInfo
     * @return callback is used to callback Service
     */
    findAddressBookInfoIdAndUpdate = (newAddressBookInfo, addressBookInfoId, callBack) => {
        AddressBookInfo.findByIdAndUpdate(addressBookInfoId, {
            firstName: newAddressBookInfo.firstName,
            lastName: newAddressBookInfo.lastName,
            address: newAddressBookInfo.address,
            city: newAddressBookInfo.city,
            state: newAddressBookInfo.state,
            zipCode: newAddressBookInfo.zipCode,
            phoneNumber: newAddressBookInfo.phoneNumber,
            emailId: newAddressBookInfo.emailId
        }, {new: true}, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }

    /**
        * @description delete the address book info using a address book info id from MongoDB
        * @return callback is used to callback service file     
    */
    findAddressBookInfoIdAndRemove = (addressBookInfoId, callBack) => {
        AddressBookInfo.findByIdAndRemove(addressBookInfoId, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        })
    }

}
module.exports = new AddressBookInfoModel();