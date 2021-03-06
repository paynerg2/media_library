const express = require('express');
const router = express.Router();

// Book Model
const Book = require('../../../models/Book');

// @route GET api/media/books
// @desc Get all books
router.get('/:userId', (req, res) => {
    Book.find()
        .where('userId')
        .equals(req.params.userId)
        .sort({ title: 1 })
        .then(books => res.json(books));
});

// @route POST api/media/books
// @desc Create a book
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        type: req.body.type,
        demographic: req.body.demographic,
        language: req.body.language,
        publisher: req.body.publisher,
        userId: req.body.userId
    });

    // !Test code
    // !May be able to refactor and combine all of these similar routing requests
    const newItem = new Book({
        ...req.body
    });
    console.log('new item:');
    console.log(newItem);
    console.log('new book:');
    console.log(newBook);
    //!

    newItem.save().then(item => res.json(item));
    //newBook.save().then(book => res.json(book));
});

// @route DELETE api/media/books/:id
// @desc Delete a book
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

// @route PUT api/media/books/:id
// @desc Edit a book
router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }).then(book =>
        res.json(book).catch(err => res.status(404).json({ success: false }))
    );
});

module.exports = router;
