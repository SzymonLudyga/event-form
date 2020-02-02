const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 8000;

const formRouter = require('./router/formRouter');

app.use('/form', formRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

module.exports = { app };
