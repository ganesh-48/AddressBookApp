const userInfoModel = require('../models/userinfo.js');
const {genSaltSync, hashSync} = require('bcrypt');
const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

class UserInfoService {

    create = (newUserInfo, callBack) => {
        const salt = genSaltSync(10);
        newUserInfo.password = hashSync(newUserInfo.password, salt);
        userInfoModel.create(newUserInfo, (error, userData) => {
            return (error) ? callBack(error, null) : callBack(null, userData);
        })
    }

    checkLogin = (userLoginInfo, callBack) => {
        userInfoModel.checkLogin(userLoginInfo, (error, userData) => {
            let result = null;
            if (error) {
                return callBack(error, null);
            }
            else if (result = bcrypt.compareSync(userLoginInfo.password, userData.password)) {
                userData.password = undefined;
                const jsontoken = sign({ result: userData }, process.env.jwt, { expiresIn: "2h" });
                return callBack(null, jsontoken);
            }
            return callBack("Invalid userlogindata", null);
        })
    }
}

module.exports = new UserInfoService();