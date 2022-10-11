const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/setcookie', (req, res) => {
    res.cookie('my cookie name', 'my cookie', {
        // maxAge: 7000,
        expires: new Date("2022-12-31"), //fecha de expiración
        httpOnly: true, //indica si solo el server accede o no a la cookie
        secure: true, //indica si la cookie será utilizada solo con HTTPS
        sameSite: 'lax' // determina si la cookie será enviada de acuerdo al sitio donde se estableció la misma. Strict: si se originó en el sitio web. Lax: cuando se accede a través de un sitio externo.
    });
    res.send('algo')
});

app.get('/getcookies', (req, res) => {
    res.send(req.cookies);
})

app.get('/getcookies/:cookie', (req, res) => {
    const param = req.params.cookie;
    const cookie = req.cookies[param];
    
    res.send(cookie);
});

app.get('/deletecookies', (req, res) => {    
    for(let key in req.cookies){
        res.clearCookie(key);
    }

    res.send('cookies deleted');
})

app.get('/deletecookie/:cookie', (req, res) => {
    const param = req.params.cookie;
    res.clearCookie(param);
    
    res.send("cookie deleted");
});

module.exports = app;