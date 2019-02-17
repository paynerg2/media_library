const express = require('express');
const router = express.Router();

// Game Model
const Game = require('../../../models/Game');

// GET:     /api/media/games
//          Return all games
router.get('/', (req, res) => {
    Game.find()
        .sort({ title: 1 })
        .then(games => res.json(games));
});

//POST:     /api/media/games
//          Add a new game
router.post('/', (req, res) => {
    const newGame = new Game({
        title: req.body.title,
        platform: req.body.platform,
        format: req.body.format,
        multiplayer: req.body.multiplayer
    });

    newGame.save().then(newGame => res.json(newGame));
});

//DELETE:   /api/media/games/:id
//          Delete game with the given id
router.delete('/:id', (req, res) => {
    Game.findById(req.params.id)
        .then(game => game.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
