const jwtAuthorization = require('./jwt-authorization');
const userValidation = require('./validations/user-validations');
const songValidations = require('./validations/song-validations');

module.exports = {
    jwtAuthorization, 
    userValidation, 
    songValidations
};