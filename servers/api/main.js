const express = require('express')
const app = express()

const { exec } = require('child_process');
const si = require('systeminformation');

const apicfg = require('../../cfg/api.json')
const maincfg = require('../../cfg/main.json')

app.get('/api/:data/:shutdown/:reboot', function (req, res) {

    const json = {
        "version": maincfg.version,
        "data": req.params.data,
        "shutdown": req.params.shutdown,
        "reboot": req.params.reboot
    }

    res.json(json);

    if(req.params.shutdown == "1") {
        console.log('shutdown..');
        exec('shutdown /s /f /t 0');
    } else if(req.params.reboot == "1") {
        console.log('reboot..');
        exec('shutdown /r /f /t 0');
    }
})

app.listen(apicfg.port, () => {
    console.log('API listening on port ' + apicfg.port + "!");
});