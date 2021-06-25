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

    checkLogin = (userLoginInfo) => {
        return new Promise((resolve, reject) => {
            userInfoModel.checkLogin(userLoginInfo, (error, userData) => {
                if (error) {
                    reject(error) 
                    return;
                }
                
                let userResult = bcrypt.compareSync(userLoginInfo.password, userData.password);
                if (userResult) {
                    const jsontoken = sign({ userResult: userData }, process.env.jwt, { expiresIn: "1h" });
                    console.log(jsontoken);
                    resolve(jsontoken)
                    return;
                }
                return reject("Invalid userlogindata");
            });
        })
    }

    /*checkLogin = (userLoginInfo, callback) => {
        userInfoModel.checkLogin(userLoginInfo, (error, userData) => {
            let userResult = null;
            if (error) {
                return callback(error, null);
            }
            else if (userResult = bcrypt.compareSync(userLoginInfo.password, userData.password)) {
                userData.password = undefined;
                const jsontoken = sign({ userResult: userData }, process.env.jwt, { expiresIn: "2h" });
                return callback(null, jsontoken);
            }
            return callback("Invalid userlogindata", null);
        })
    }*/

}

module.exports = new UserInfoService();