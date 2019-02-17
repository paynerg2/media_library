const express = require('express');
const router = express.Router();

const Video = require('../../../models/Video');

// GET : /api/media/videos
//      Return all videos
router.get('/', (req, res) => {
    Video.find()
        .sort({ title: 1 })
        .then(videos => res.json(videos));
});

// POST:  /api/media/videos
//       Add a new video to the collection
router.post('/', (req, res) => {
    const newVideo = new Video({
        title: req.body.title,
        episodes: req.body.episodes,
        quality: req.body.quality,
        location: req.body.location
    });

    newVideo.save().then(newVideo => res.json(newVideo));
});

// DELETE: /api/media/videos/:id
//         Delete a video by id
router.delete('/:id', (req, res) => {
    Video.findById(req.params.id)
        .then(video => video.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
