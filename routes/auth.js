const express = require('express');
const router = express.Router();
let user = require('../user');

router.post('/login', (req, res) => {
    // Mock Data
    const email = req.body.email;
    const password = req.body.password;
    const birthday = new Date(2001, 1);

    user = {
        ...user,
        age: new Date().getFullYear() - birthday.getFullYear(),
        birthday,
        dayOfNextNotification: new Date(),
        dayOfLogin: new Date()
    };

    if (email === user.email && password === user.password) {
        delete user.password;

        setTimeout(() => {
            res.json({
                success: true,
                user
            });
        }, 2000)
    } else {
        setTimeout(() => {
            res.status(400).json({
                success: false,
                email: {
                    valid: user.email === email,
                    message: user.email === email ? null : 'Invalid email.'
                },
                password: {
                    valid: user.password === password,
                    message: user.password === password ? null : 'Invalid password'
                }
            });
        }, 3000);
    }
});

module.exports = router;