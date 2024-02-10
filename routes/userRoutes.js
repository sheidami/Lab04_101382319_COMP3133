const express = require('express');
const user = require("../models/userModel")
const router = express.Router();


// POST - to create a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new user(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;


