const express = require('express'),
    server = express();
const path = require('path');
require("dotenv").config();
const nodemailer = require("nodemailer");


const port = process.env.PORT;
server.set('port', process.env.PORT || 3000);
server.set('view engine', 'ejs');

server.set("views", path.join(__dirname, "views"));

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));


server.get('/', (req, res) => {
    res.render("index.ejs")
})

server.get('/about', (req, res) => {
    res.render("about.ejs")
})

server.get('/contact', (req, res) => {
    res.render('contact.ejs')
})

server.get('/privacy', (req, res) => {
    res.render('privacy.ejs')
});
server.get('/team', (req, res) => {
    res.render('team.ejs')
});
server.get('/board/non-executives', (req, res) => {
    res.render('governors.ejs')
});
server.get('/frequently-asked-questions', (req, res) => {
    res.render('faq.ejs')
});
server.get('/board/advisory', (req, res) => {
    res.render('advisory.ejs')
});

server.get('/blog', (req, res) => {
    res.render('blogs.ejs')
});
server.get('/impact-blog', (req, res) => {
    res.render('impact.ejs')
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
        from: [req.body.email],
        to: ['admin@mobiklinic.com'],
        subject: `Contact Form: ${req.body.subject} from: ${req.body.name} email: ${req.body.email}`,
        text: req.body.message
    }

    //send mail
    transporter.sendMail(mailOption, (req, res, next, error, info) => {
        if (error) {
            console.log(error);
            res.json({ msg: 'fail' });
        } else {
            console.log('good');
            console.log(res);
            // res.sendfile('/contact.ejs', { root: __dirname });
        }
    })
});

server.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});

