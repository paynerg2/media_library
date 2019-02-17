const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscSchema = new Schema({
    name: {
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
