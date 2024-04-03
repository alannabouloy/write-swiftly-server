const songsController = require('../controllers').songs;

module.exports = app => {
    app.get('/songs', songsController.songList);
};