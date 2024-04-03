const User = require('../../models').User;

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

module.exports = { checkForDuplicateUsername };