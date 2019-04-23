let marked = require('marked');
let fs = require('fs');
let path = require('path');

let html = marked(fs.readFileSync(path.resolve(__dirname, 'markdown.md'), 'utf8'));

module.exports = html;
