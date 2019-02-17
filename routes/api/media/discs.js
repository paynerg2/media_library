const express = require('express');
const router = express.Router();

// Require Disc model
const Disc = require('../../../models/Disc');

// GET : /api/media/discs
//       Should return all discs
router.get('/', (req, res) => {
    Disc.find()
        .sort({ name: 1 })
        .then(discs => res.json(discs));
});

// POST: /api/media/discs
//       Add a new disc
router.post('/', (req, res) => {
    const newDisc = new Disc({
        name: req.body.name,
        format: req.body.format,
        publisher: req.body.publisher,
        partOfSet: req.body.partOfSet
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

module.exports = router;
