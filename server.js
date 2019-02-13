const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
