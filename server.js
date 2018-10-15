const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('./config');
const path = require('path');
const auth = require('./routes/auth');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', auth);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/src/index.html'));
});

app.listen(config.port, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${config.port}`);
    }
});
