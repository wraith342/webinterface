var term = require('terminal-kit').terminal;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// warnings
async function warning(s) {
    await sleep(500);
    term.brightYellow("WARN: " + s + "\n");
}
  
async function error(s) {
    await sleep(500);
    term.brightRed("ERROR: " + s + "\n");
}
  
async function ok(s) {
    await sleep(500);
    term.brightGreen("OK: " + s + "\n");
}

async function action(s) {
    await sleep(500);
    term.brightMagenta("ACTION: " + s + "\n");
}
 

module.exports = { warning, error, ok, action };