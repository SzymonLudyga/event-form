const mongoose = require('mongoose');
const validator = require('validator');
const { FORMDB_URL } = require('../consts');

mongoose.connect(FORMDB_URL, { useNewUrlParser: true });

const FormSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true,
    },
    last_name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: [validator.isEmail, 'Please enter valid email address.'],
    },
    event_date: {
        type: Date,
        required: true,
    },
});

const Form = mongoose.model('Form', FormSchema);

module.exports = { Form };
