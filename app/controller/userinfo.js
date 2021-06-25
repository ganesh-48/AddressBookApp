const userInfoService = require('../service/userinfo.js');
const data = require('../middleware/validation.js'); 
const userValidation = require('../middleware/userValidation.js');

class UserInfo {
    create = (req, res) => {

        var userResult = data.joiuserInfo.validate(req.body);
        if(userResult.error) {
            console.log(userResult);
            return res.status(400).send({
                success: false,
                message: userResult.error.details[0].message
            });
        } 

        let newUserInfo = req.body;
        userInfoService.create(newUserInfo, (error, userData) => {
            if(error) {
                return res.status(500).send ({
                    success: false,
                    message: "Some error is occured at time creatindg data"
                })
            }
            res.status(200).send ({
                success: true,
                message: "New user data was inserted successfully",
                data: userData
            })
        })
    }

    login = (req, res) => {
        /*let userLoginInfo = req.body;
        var userLoginInfoValidation = userValidation.joiuserInfo.validate(userLoginInfo);
        if(userLoginInfoValidation.error) {
            console.log(result);
            return res.status(400).send({
                success: false,
                message: userLoginInfoValidation.error.details[0].message
            });
        }*/

       let userLoginInfo = userValidation.joiuserInfo.validate(req.body);
        userInfoService.checkLogin(userLoginInfo.value).then((userData) => {
            console.log(userLoginInfo.value);
            res.send({
                success: true,
                message: "User Login Successfull..",
                token: userData
            });
        }).catch((error) => {
            res.status(404).send({
                success: false,
                message: "Login details wrong"
            });
        });
    }

    /*
    login = (req, res) => {

        let userLoginInfo = req.body;
        var userLoginInfoValidation = userValidation.joiuserInfo.validate(userLoginInfo);
        if(userLoginInfoValidation.error) {
            console.log(result);
            return res.status(400).send({
                success: false,
                message: userLoginInfoValidation.error.details[0].message
            });
        }
   
        userInfoService.checkLogin(userLoginInfo, (error, userData) => {
            if(error) {
                return res.status(404).send ({
                    success: false,
                    message: "Login details wrong"
                })
            }
            res.status(200).send({
                success: true,
                message: "User Login Successfully..",
                token:  userData
            })
        })
    }*/

}

module.exports = new UserInfo();