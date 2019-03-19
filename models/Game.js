const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    id: { type: Schema.ObjectId },
    title: {
        type: String,
        required: true
    },
    platform: {
        type: String,
        required: true
    },
    format: {
        type: String,
        enum: ['physical', 'digital', 'ROM'],
        required: true
    },
    multiplayer: Boolean
});

module.exports = Game = mongoose.model('game', GameSchema);
