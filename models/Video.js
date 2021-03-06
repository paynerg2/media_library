const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    id: { type: Schema.ObjectId },
    title: {
        type: String,
        required: true
    },
    episodes: {
        type: Number,
        required: true
    },
    quality: String,
    location: String,
    userId: String
});

module.exports = Video = mongoose.model('video', VideoSchema);
