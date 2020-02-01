const express = require('express');
const router = express.Router();

router.post('',  (req, res) => {
    const { email, firstName, lastName, eventDate } = req.body;
    console.log('Email:', email);
    console.log('First name:', firstName);
    console.log('Last name:', lastName);
    console.log('Event date:', eventDate);
    res.status(200).send({ status: "OK" });
});

module.exports = router;
