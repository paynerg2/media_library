const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const books = require('./routes/api/media/physical/books');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/media/physical/books', books);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
