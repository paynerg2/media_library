const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    id: { type: Schema.ObjectId },
    title: {
        type: String,
        required: true
    },
    author: [String],
    ISBN: String,
    type: {
        type: String,
        required: true,
        enum: ['manga', 'light novel', 'novel', 'guide', 'manwha']
    },
    demographic: {
        type: String,
        enum: ['shounen', 'shoujo', 'seinen', 'josei', 'kids']
    },
    language: String,
    publisher: String,
    userId: String
});

module.exports = Book = mongoose.model('book', BookSchema);
