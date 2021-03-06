const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const books = require('./routes/api/media/books');
const discs = require('./routes/api/media/discs');
const games = require('./routes/api/media/games');
const videos = require('./routes/api/media/Videos');

const app = express();

// Apply middleware
const middleware = [bodyParser.json(), cors()];
app.use(...middleware);

// DB Config
const db = require('./config').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/media/books', books);
app.use('/api/media/discs', discs);
app.use('/api/media/games', games);
app.use('/api/media/videos', videos);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
