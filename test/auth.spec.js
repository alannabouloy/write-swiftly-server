const app = require('../src/app');
const supertest = require('supertest');
/* TODO:
- Test Signup
    - Happy Path
        - User enters in valid inputs and a new user is created with a username and password
    - Unhappy Path
        - If user enters invalid inputs then it will return an error
        - If user already exists, return error
- Test Signin
    - Happy Paths
        - If user enters credentials, it will return a auth token
        - If user has token, it will return as authorized
    - Unhappy Paths 
        - If user enters incorrect credentials, it will return error
        - If user enters invalid credentials, it will return error
        - If user does not have token, it will return unauthorized
*/