const express = require('express');
const { userValidation } = require('../middleware');
const authController = require('../controllers').auth;

const jsonParser = express.json();

module.exports = app => {
    //Headers//
    app.use( (req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();    
    });

    //Routes//
    app.post('/signup', [ jsonParser, userValidation.validateNewUser, userValidation.checkForDuplicateUsername, userValidation.checkForDuplicateEmail ], authController.signUp );
    app.post('/signin', [ jsonParser, userValidation.validateUserSignin ], authController.signIn);
};