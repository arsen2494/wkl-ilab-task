const express = require('express');
const router = express.Router();
const users = require('../users');

router.get('/', (req, res) => {
    for (user of users) {
        user.dayOfLogin = new Date();
    }

    res.json(users);
});

module.exports = router;