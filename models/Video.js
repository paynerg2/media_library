const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    episodes: {
        type: [String],
        required: true
    },
    quality: String,
    location: String
});

module.exports = Video = mongoose.model('video', VideoSchema);
