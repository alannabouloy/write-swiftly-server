const User = require('../../../models').User;
const validations = require('../../helpers/validations');

/*TODO: add further validation middleware including:
  - ensure username, email, and password are all included in request body
  - limit characters for username
  - ensure email is in valid email format
  - put some validations for password creation: length, characters, etc. 
*/

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

const validateRequest = (req, res, next) => {
    const {
        username,
        email,
        password
    } = req.body;

    const keys = ["username", "email", "password"];
    let error = validations.validateKeys({username, email, password}, keys);
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

module.exports = { checkForDuplicateUsername, checkRole, validateRequest };