const fs = require('fs');
const path = require('path');
const marked = require('marked');

// The parent directory for all documentaiton to be processed.
const CHAPTERS_DIRECTORY = path.resolve(__dirname, './documentation');
// Scaffold documention object.
let documentation = {};
// Process the directory contents.
processDirectoryContents(CHAPTERS_DIRECTORY, 'Core Rules', 1);

// To process the directory.
function processDirectoryContents(directory, extension, depth) {
    let nextDepth = depth + 1;
    let text = "";
    extension = stripNumbering(extension);
    /** Add the proper number of pound symbols for the correct header type. */
    for (let i = 0; i < nextDepth; i++) text += "#";
    // Add the folder's name as the header text.
    text += ` ${extension}\n`;

    // Get a list of files and folders in the directory.
    let contents = fs.readdirSync(directory, 'utf8');

    /** If there is a text.js file in the list add its result to text and remove it from the contents list. */
    let textIndex = contents.indexOf('text.js');
    if (textIndex !== -1) {
        contents.splice(textIndex, 1);
        text += require(path.resolve(__dirname, directory, "text.js"));
    }

    contents.forEach(item => {
        if (item.includes(".")) return;
        // Add the text for any children of the item.
        text += processDirectoryContents(path.resolve(__dirname, directory, item), item, nextDepth) + "\n";

    });
    // Save each section to documentation as html.
    documentation[extension.toLowerCase()] = marked(text);

    // Return text for use by parent.
    return text;
}

function stripNumbering(extension) {
    return extension.replace(/[^a-z ]/gi, "").trim();
}

module.exports = documentation;
