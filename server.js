const express = require('express'),
    server = express();
const path = require('path');
require("dotenv").config();
const nodemailer = require("nodemailer");



const port = process.env.PORT;
server.set('port', process.env.PORT || 3000);


server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));



server.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname });
});

server.get('/about', (req, res) => {
    res.sendFile('/about.html', {
        root: __dirname
    });
});


server.get('/privacy', (req, res) => {
    res.sendFile('/privacy.html', {
        root: __dirname
    });
});

server.get('/contact', (req, res) => {
    res.sendFile('/contact.html', { root: __dirname });
});



server.get('/contact', (req, res) => {
    res.sendFile('/contact.html', { root: __dirname });
});

const contactAddress = 'mobiklinicuganda@gmail.com';


server.post('/contact', async (req, res, next) => {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "mobiklinicuganda@gmail.com",
            pass: "ptsayqzvfrwbwyoa",           
        },
    });
    const mailOption = {
        //build email option
        from: [contactAddress, req.body.email],
        to: [req.body.email],
        from: `${req.body.name}`,
        subject: `${req.body.subject}`,
        text: req.body.message
    }

    //send mail
    transporter.sendMail(mailOption, (req, res, next, error, info) => {
        if (error) {
            console.log(error);
            res.json({ msg: 'fail' });
        } else {
            console.log('good')
            res.sendFile('/contact', { root: __dirname });
        }
    })
});

server.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});
