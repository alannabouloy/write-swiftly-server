const User = require('../../../models').User;

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

module.exports = { checkForDuplicateUsername, checkRole };