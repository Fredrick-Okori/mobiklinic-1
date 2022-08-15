const express = require('express'),
    server = express();
const path = require('path');



server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));


server.set('port', process.env.PORT || 8080);

server.get('/', (req, res) => { res.sendFile('/index.html', { root: __dirname }); });

server.get('/about', (req, res) => {
    res.sendFile('/pages/about.html', {
        root: __dirname
    });
});

server.get('/contact', (req, res) => { res.sendFile('/pages/contact.html', { root: __dirname }); });


server.get('/advisory', (req, res) => {
    res.sendFile('/pages/advisory.html', {
        root: __dirname
    });
});
server.get('/governors', (req, res) => {
    res.sendFile('/pages/governors.html', {
        root: __dirname
    });
});

server.listen(8080, () => {
    console.log('Listening on port 8080');
});