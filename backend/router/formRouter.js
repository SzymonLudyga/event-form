const express = require('express');

const router = express.Router();
const { Form } = require('../db/Form');

router.post('', (req, res) => {
    const {
        email, firstName, lastName, eventDate,
    } = req.body;

    const form = new Form({
        email,
        first_name: firstName,
        last_name: lastName,
        event_date: eventDate,
    });

    form.save()
        .then((newForm) => res.status(200).send(newForm)).catch((err) => {
            res.status(500).send(err); // handling errors to be added
        });
});

module.exports = router;
