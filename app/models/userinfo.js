const mongoose = require('mongoose');

const UserInfoSchema = mongoose.Schema ({
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
    emailId: {
        type: String,
        required: true,
        validation: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true;
});

module.exports = new UserInfoSchema