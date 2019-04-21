const fs = require('fs');
const path = require('path');

// The parent directory for all documentaiton to be processed.
const CHAPTERS_DIRECTORY = path.resolve(__dirname, './documentation');
// Scaffold documention object.
let documentation = {};
// Process the directory contents.
processDirectoryContents(CHAPTERS_DIRECTORY, 'Core Rules', '', 1);

// To process the directory.
function processDirectoryContents(directory, sectionName, extension, depth) {
    let nextDepth = depth + 1;

    sectionName = stripNumbering(sectionName);

    let html = `<div className="section__${sectionName.replace(" ", "_").toLowerCase()}">`;

    let sectionExtension = extension ? `${extension}/${sectionName}` : sectionName;


    /** Add the proper header with the section title. */
    html += `<h${depth}>${sectionName}</h${depth}>`;


    // Get a list of files and folders in the directory.
    let contents = fs.readdirSync(directory, 'utf8');

    /** If there is a text.js file in the list add its result to the html and remove it from the contents list. */
    let textIndex = contents.indexOf('html.js');
    if (textIndex !== -1) {
        contents.splice(textIndex, 1);
        html += require(path.resolve(__dirname, directory, "html.js"));
    }

    contents.forEach(item => {
        if (item.includes(".")) return;
        // Add the text for any children of the item.
        html += processDirectoryContents(path.resolve(__dirname, directory, item), item, sectionExtension, nextDepth) + "\n";

    });

    html += "</div>";
    // Save markedText to documentation.<sectionExtension>
    if (documentation[sectionExtension]) console.error(`Section Extension: ${sectionExtension} has duplicate documentation.`);
    documentation[sectionExtension.toLowerCase()] = html;
    // Return text for use by parent.
    return html;
}

function stripNumbering(sectionName) {
    return sectionName.replace(/[^a-z ]/gi, "").trim();
}
console.log(documentation);
module.exports = documentation;
