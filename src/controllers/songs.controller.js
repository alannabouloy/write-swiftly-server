const Songs = require('../../models').Song;

exports.songList = (req, res) => {
    return Songs.findAll()
        .then( songs => {
            if(!songs) {
                res.status(404).send({error: "No Songs Found"});
            } else {
                res.status(200).send(songs)
            }
        })
        .catch(error => {
            res.status(400).send(error);
        })
}




