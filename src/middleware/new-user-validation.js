const User = require('../../models').User;

const checkForDuplicateUsername = (req, res, next) => {
    if(!req.body.username) {
        res.status(500).send({error: `received ${req.body} and not expected format`});
        console.log(req.body)
        return;
    }
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