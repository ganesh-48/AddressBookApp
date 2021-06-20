const mongoose = require('mongoose');

const AddressBookInfoSchema = mongoose.Schema({
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
        type: integer,
        required: true,
        validation:  /@"^\d{6}$/
    },
    phoneNumber: {
        type: integer,
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

    create = (newData, callBack) => {
        const addressBookInfo = new AddressBookInfo ({
            firstName: newData.firstName,
            lastName: newData.lastName,
            address: newData.address,
            city: newData.city,
            state: newData.state,
            zipCode: newData.zipCode,
            phoneNumber: newData.phoneNumber,
            emailId: newData.emailId            
        }),
        addressBookInfo.save({}, (error, data) => {
            return (error) ? callBack(error, null) : callBack(null, data);
        });
    }
}
module.exports = new AddressBookInfoModel();