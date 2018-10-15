const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // Mock Data
    const email = req.body.email;
    const password = req.body.password;
    const birthday = new Date(2001, 1);
    const user = {
        id: 1,
        email: 'user@mail.com',
        password: "password",
        name: 'John',
        age: new Date().getFullYear() - birthday.getFullYear(),
        birthday
    };

    if (email === user.email && password === user.password) {
        delete user.password;
        res.json({
            success: true,
            user
        })
    } else {
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
    }
});

module.exports = router;