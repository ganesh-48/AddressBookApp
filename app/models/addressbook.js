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

module.exports = mongoose.model('AddressBookInfo', AddressBookInfoSchema);