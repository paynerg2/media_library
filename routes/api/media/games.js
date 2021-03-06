const express = require('express');
const router = express.Router();

// Game Model
const Game = require('../../../models/Game');

// GET:     /api/media/games
//          Return all games
router.get('/:userId', (req, res) => {
    Game.find()
        .where('userId')
        .equals(req.params.userId)
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
        multiplayer: req.body.multiplayer,
        userId: req.body.userId
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

// @route PUT api/media/games/:id
// @desc Edit a game
router.put('/:id', (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).then(game =>
        res.json(game).catch(err => res.status(404).json({ success: false }))
    );
});

module.exports = router;
