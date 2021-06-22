const userInfoModel = require('../models/userinfo.js');

class UserInfoService {

    create = (newUserInfo, callBack) => {
        userInfoModel.create(newUserInfo, (error, userData) => {
            return (error) ? callBack(error, null) : callBack(null, userData);
        })
    }
}

module.exports = new UserInfoService();