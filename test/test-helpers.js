const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function makeUsersArray(){
    return [
        {
            id: 1,
            username: 'testuser1',
            password: 'test-password1',
            email: 'testuser1@email.com',
            role: 'admin',
            createdAt: '2029-01-22T16:28:32.615Z'
        },
        {
            id: 2, 
            username: 'testuser2',
            password: 'test-password2',
            email: 'testuser2@email.com',
            role: 'uesr',
            createdAt: '2029-01-22T16:28:32.615Z'
        },
        {
            id: 3,
            username: 'testuser3',
            password: 'test-password3',
            email: 'testuser3@email.com',
            role: 'user',
            createdAt: '2029-01-22T16:28:32.615Z'
        }
    ]
}