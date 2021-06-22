const userInfoService = require('../service/userinfo.js');
const data = require('../middleware/validation.js'); 

class UserInfo {
    create = (req, res) => {

        var userResult = data.joiuserInfo.validate(req.body);
        if(userResult.error) {
            console.log(result);
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
}

module.exports = new UserInfo();