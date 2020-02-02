const mongoose = require('mongoose');
const validator = require('validator');
const { FORMDB_URL, TESTFORMDB_URL } = require('../consts');

const dbUrl = process.env.NODE_ENV === 'test' ? TESTFORMDB_URL : FORMDB_URL;

mongoose.connect(dbUrl, { useNewUrlParser: true });

const errors = {
    noFirstName: 'Please fill in first name.',
    noLastName: 'Please fill in last name.',
    noEmail: 'Please fill in email address.',
    invalidEmail: 'Please enter valid email address.',
    noEventDate: 'Please fill in event date.',
};

const FormSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, errors.noFirstName],
        trim: true,
    },
    last_name: {
        type: String,
        required: [true, errors.noLastName],
        trim: true,
    },
    email: {
        type: String,
        required: [true, errors.noEmail],
        trim: true,
        validate: [validator.isEmail, errors.invalidEmail],
    },
    event_date: {
        type: Date,
        required: [true, errors.noEventDate],
    },
});

const Form = mongoose.model('Form', FormSchema);

module.exports = { Form, errors };
