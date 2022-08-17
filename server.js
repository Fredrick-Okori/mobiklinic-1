const express = require('express'),
    server = express();
const path = require('path');



server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));


server.set('port', process.env.PORT || 8080);

server.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname });
});

server.get('/about', (req, res) => {
    res.sendFile('/about.html', {
        root: __dirname
    });
});

server.get('/contact', (req, res) => { res.sendFile('/contact.html', { root: __dirname }); });

server.listen(8080, () => {
    console.log('Express server started at port 8080');
});