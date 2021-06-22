const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    timestamps: true
});

const UserInfo = mongoose.model('User Info', UserInfoSchema);

class UserInfoModel {

    create = (newUserInfo, callback) => {
        const userInfo = new UserInfo({
            firstName: newUserInfo.firstName,
            lastName: newUserInfo.lastName,
            emailId: newUserInfo.emailId,
            password: newUserInfo.password
        });
        userInfo.save({}, (error, userData) => {
            return (error) ? callback(error, null) : callback(null, userData);
        })
    }

    checkLogin = (userLoginInfo, callback) => {
        UserInfo.findOne({ "emailId": userLoginInfo.emailId }, (error, userData) => {
            if (error) {
                return callback(error, null);
            }
            return (!userData) ? callback("user doesn't exist", null) : callback(null, userData);
        })
    }
}

module.exports = new UserInfoModel();