const express = require('express');
const { userValidation, jwtAuthorization } = require('../middleware');
const songsController = require('../controllers').songs;
const { verifyToken } = jwtAuthorization;
const { checkRole } = userValidation;


const jsonParser = express.json();

module.exports = app => {
    app.get('/songs', songsController.songList);
    app.get('/song/:title', songsController.findSong);
    app.post('/songs/add', [jsonParser, verifyToken, checkRole], songsController.addSong);
};