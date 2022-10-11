const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    res.cookie('my cookie name', 'my cookie');
    res.send('algo')
});

module.exports = app;