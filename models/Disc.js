const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscSchema = new Schema({
    id: { type: Schema.ObjectId },
    title: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true,
        enum: ['DVD', 'BD', 'LD']
    },
    publisher: String,
    partOfSet: {
        type: Boolean,
        required: true
    }
});

module.exports = Disc = mongoose.model('disc', DiscSchema);
