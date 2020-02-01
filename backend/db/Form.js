const mongoose = require('mongoose');
const validator = require('validator');
const { FORMDB_URL } = require('../consts');

mongoose.connect(FORMDB_URL, { useNewUrlParser: true });

const FormSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'Please fill in first name.'],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, 'Please fill in last name.'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please fill in email address.'],
        trim: true,
        validate: [validator.isEmail, 'Please enter valid email address.'],
    },
    event_date: {
        type: Date,
        required: [true, 'Please fill in event date.'],
    },
});

const Form = mongoose.model('Form', FormSchema);

module.exports = { Form };
