const joi = require('@hapi/joi');

class Validation {
    
    joiAddressBookInfo = joi.object({
        firstName: joi.string().min(3).max(30),
        lastName: joi.string().alphanum().min(2).max(30),
        address: joi.string().alphanum().min(2).max(30),
        city: joi.string().alphanum().min(2).max(30),
        state: joi.string().alphanum().min(2).max(30),
        phoneNumber: joi.number().min(1000000000).max(9999999999),
        zipCode: joi.number().min(100000).max(999999),
        emailId: joi.string().email().required()
    });

    joiuserInfo = joi.object({
        firstName: joi.string().min(3).max(30),
        lastName: joi.string().alphanum().min(2).max(30),
        emailId: joi.string().email().required(),
        password: joi.string().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')).required(),
    });

}

module.exports = new Validation();