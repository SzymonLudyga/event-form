const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = 8000;

const formRouter = require('./router/formRouter');

app.use('/form', formRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
