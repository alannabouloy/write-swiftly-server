const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function verifyToken( req, res, next ){
    let token = req.headers["x-access-token"];
    if(!token) {
        return res.status(403).send({ error: "No token provided" });
    }
    jwt.verify( token, JWT_SECRET, (error, decoded) => {
        if(error){
            return res.status(401).send({error: "Unauthorized"});
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = { 
    verifyToken: verifyToken
 };