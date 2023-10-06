const express = require('express');
const app = express();
const path = require('path');

const cfg = require('../../cfg/main.json')
const port = cfg.webserverport;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../html', 'index.html'));
});

app.listen(port, () => {
    console.log('Webserver listening on port ' + port + "!");
});