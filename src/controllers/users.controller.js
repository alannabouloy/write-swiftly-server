const User = require('../../models').User;

exports.getUser = (req, res) => {
    return User.findByPk( req.params.userId )
        .then( user => {
            if(!user) {
                res.status(404).send({error: 'User not found'});
            } else {
                res.status(200).send(user);
            }
        })
        .catch(error => {
            res.status(400).send(error);
        })
}