const User = require('../../../models').User;
const validations = require('../../helpers/validations');

/*TODO: add further validation middleware including:
  - ensure username, email, and password are all included in request body
  - limit characters for username
  - ensure email is in valid email format
  - put some validations for password creation: length, characters, etc. 
*/
const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
const checkForDuplicateUsername = (req, res, next) => {
    User.findOne( {
        where: {
            username: req.body.username
        }
    }).then( user => {
        if(user){
            res.status(400).send({error: 'Username already taken'});
            return;
        }
        next();
    });
}

const checkForDuplicateEmail = (req, res, next) => {
    User.findOne( {
        where: {
            email: req.body.email
        }
    }).then( user => {
        if(user){
            res.status(400).send({error: 'There is already an account assigned to this email'});
            return;
        }
        next();
    });
}

const validatePassword = (password) => {
    if (password.length < 8) {
        return {error: { message: 'Password must be longer than 8 characters' } }
    }
    if (password.length > 72) {
        return { error: { message: 'Password must be less than 72 characters' } } 
    }
    if (password.startsWith(' ') || password.endsWith(' ')) {
        return { error: { message: 'Password must not start or end with empty spaces' } }
    }
    if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password)) {
        return { error: { message: 'Password must contain 1 upper case, lower case, number and special character' } }
    }
    return null
}

const validateNewUser = (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body;

    //validate that all of the required fields are in req.body
    const keys = ["username", "email", "password"];
    let error = validations.validateKeys({username, email, password}, keys);
    if(error){
        return res
            .status(400)
            .json(error);
    }
    //validate that username given is more than 6 characters
    error = validations.validateMinStringLength(username, 6, "username");
    if(error){
        return res
        .status(400)
        .json(error);
    }
    //validate that email is in accepted format
    error = validations.validateEmailAddress(email)
    if(error){
        return res
        .status(400)
        .json(error);
    }
    //validate password is appropriate length and contains required characters
    error = validatePassword(password)
    if(error){
        return res
        .status(400)
        .json(error);
    }

    next();
}

const checkRole = (req, res, next) => {
    User.findByPk(req.userId)
    .then( user => {
        if(user.role !== 'admin'){
            res.status(401).send({error: 'User not authorized'});
            return;
        }
        next();
    })
}

module.exports = { 
    checkForDuplicateUsername,
    checkForDuplicateEmail,
    checkRole,
    validateNewUser
 };