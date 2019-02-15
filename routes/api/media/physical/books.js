const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../../../models/Book');

// @route GET api/media/physical/books
// @desc Get all books
router.get('/', (req, res) => {
    Book.find()
        .sort({ title: 1 })
        .then(books => res.json(books));
});

// @route POST api/media/physical/books
// @desc Create a book
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        type: req.body.type
    });

    newBook.save().then(book => res.json(book));
});

// @route DELETE api/media/physical/books/:id
// @desc Delete a book
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
