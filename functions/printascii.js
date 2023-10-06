const fs = require('fs');
var term = require('terminal-kit').terminal;

function printFileAsciiArt(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
  
      term.magenta(data + "\n");
    });
}


module.exports = { printFileAsciiArt };