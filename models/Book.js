const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: [String],
    ISBN: String,
    type: {
        type: String,
        required: true,
        enum: ['manga', 'light novel', 'novel', 'guide']
    }
});

module.exports = Book = mongoose.model('book', BookSchema);
