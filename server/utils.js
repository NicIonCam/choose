var fs = require('fs');

function readJsonFileSync(filepath) {
    var file = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(file);
}

module.exports = {
    readJsonFileSync
}