const joi = require('@hapi/joi');

const data = joi.object({
    firstName: joi.string().min(3).max(30),
    lastName: joi.string().alphanum().min(2).max(30),
    city: joi.string().alphanum().min(2).max(30),
    state: joi.string().alphanum().min(2).max(30),
    phoneNumber: joi.number().min(1000000000).max(9999999999),
    zipCode: joi.number().min(100000).max(999999),
    emailId: joi.string().email().required()
});

module.exports = data