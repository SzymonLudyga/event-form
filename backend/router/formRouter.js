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
            if (err.name === 'ValidationError') {
                const errorEntries = Object.entries(err.errors);
                const errorsArray = errorEntries.map((el) => [el[0], el[1].message]);
                res.status(400).send({ errorsArray });
            } else {
                res.status(500).send(err);
            }
        });
});

module.exports = router;
