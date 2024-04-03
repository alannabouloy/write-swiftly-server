const songsController = require('../controllers').songs;
const usersController = require('../controllers').users;

module.exports = app => {
    //Song routes//
    app.get('/songs', songsController.songList);

    //User routes//
    app.get('/users/:userId', usersController.getUser);
};