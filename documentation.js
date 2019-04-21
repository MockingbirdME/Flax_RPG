const fs = require('fs');
const path = require('path');
const marked = require('marked');

// The parent directory for all documentaiton to be processed.
const CHAPTERS_DIRECTORY = path.resolve(__dirname, './documentation');
// Scaffold documention object.
let documentation = {};
// Process the directory contents.
processDirectoryContents(CHAPTERS_DIRECTORY, 'Core Rules', '', 1);

// To process the directory.
function processDirectoryContents(directory, sectionName, extension, depth) {
    let nextDepth = depth + 1;
    let text = "";
    sectionName = stripNumbering(sectionName);
    let sectionExtension = extension ? `${extension}/${sectionName}` : sectionName;
    /** Add the proper number of pound symbols for the correct header type. */
    for (let i = 1; i < nextDepth; i++) text += "#";
    // Add the folder's name as the header text.
    text += ` ${sectionName}\n`;

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
        text += processDirectoryContents(path.resolve(__dirname, directory, item), item, sectionExtension, nextDepth) + "\n";

    });
    // Get documentation as html.
    let markedText = marked(text);

    // Save markedText to documentation.<sectionExtension>
    if (documentation[sectionExtension]) console.error(`Section Extension: ${sectionExtension} has duplicate documentation.`);
    documentation[sectionExtension.toLowerCase()] = markedText;
    // Return text for use by parent.
    return text;
}

function stripNumbering(sectionName) {
    return sectionName.replace(/[^a-z ]/gi, "").trim();
}

module.exports = documentation;
