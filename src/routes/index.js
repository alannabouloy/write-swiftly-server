const songsController = require('../controllers').songs;

module.exports = app => {
    //Song routes//
    app.get('/songs', songsController.songList);
};