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
        .then((newForm) => res.status(200).send({
            details: 'New event form entry added.',
            // for testing purposes
            ...process.env.NODE_ENV && { form: newForm },
        })).catch((err) => {
            if (err.name === 'ValidationError') {
                const errorEntries = Object.entries(err.errors);
                const errorsArray = errorEntries.map((el) => [el[0], el[1].message]);
                res.status(400).send({ errorsArray });
            } else {
                res.status(500).send(err);
            }
        });
});

// for testing purposes
router.delete('', (req, res) => {
    Form.deleteMany({})
        .then((data) => res.status(200).send({
            details: data.deletedCount
                ? 'Test forms successfully deleted'
                : 'No forms to be deleted',
            deleted: data.deletedCount,
        }))
        .catch((err) => res.status(500).send(err));
});

module.exports = router;
