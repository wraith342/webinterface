const { spawn } = require('child_process');
const { printFileAsciiArt } = require('./functions/printascii')
const {warning, ok, error, action} = require('./functions/warnings')
var term = require('terminal-kit').terminal;
const { app, BrowserWindow } = require('electron');

term.clear();
const filePath = './files/ascii.txt';
printFileAsciiArt(filePath);

// API starten
const apiProcess = spawn('node', ['./servers/api/main.js']);
apiProcess.stdout.on('data', (data) => {
    ok(data.toString());
});

// Webserver starten
const webserverProcess = spawn('node', ['./servers/webserver/web.js']);
webserverProcess.stdout.on('data', (data) => {
    ok(data.toString());
});

const createWindow = () => {
    const win = new BrowserWindow({
      width: 400,
      height: 500
    })
  
    win.loadFile('./gui/index.html')
}

app.whenReady().then(() => {
    createWindow();
    ok("Electron Window opened")
})
