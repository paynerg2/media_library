const express = require('express');
const router = express.Router();

// Require Disc model
const Disc = require('../../../models/Disc');

// GET : /api/media/discs
//       Should return all discs
router.get('/', (req, res) => {
    console.log('disc get');
    Disc.find()
        .sort({ title: 1 })
        .then(discs => res.json(discs));
});

// POST: /api/media/discs
//       Add a new disc
router.post('/', (req, res) => {
    console.log('disc post');
    const newDisc = new Disc({
        title: req.body.title,
        format: req.body.format,
        publisher: req.body.publisher,
        partOfSet: req.body.partOfSet,
        userId: req.body.userId
    });

    newDisc.save().then(newDisc => res.json(newDisc));
});

// DELETE: /api/media/discs/:id
//        Delete the disc with the corresponding id
router.delete('/:id', (req, res) => {
    Disc.findById(req.params.id)
        .then(disc => disc.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route PUT api/media/discs/:id
// @desc Edit a disc
router.put('/:id', (req, res) => {
    Disc.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).then(disc =>
        res.json(disc).catch(err => res.status(404).json({ success: false }))
    );
});

module.exports = router;
