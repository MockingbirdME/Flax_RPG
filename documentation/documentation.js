const fs = require('fs');
const path = require('path');

// The parent directory for all documentaiton to be processed.
const CHAPTERS_DIRECTORY = path.resolve(__dirname, '../documentation');

// TODO test if this can just be exported directly with no variable needed.
let documentation = processDirectoryContents(CHAPTERS_DIRECTORY, 1);

// To process the directory.
function processDirectoryContents(directory, depth) {
    // Store contents in an Object.
    let content = {
        depth: depth
    };

    let nextDepth = depth + 1;
    // For each item(file or folder) in the directory...
    fs.readdirSync(directory, 'utf8').forEach(item => {
        /** If it's a text.md file save the contents as content.text. */
        if (item === 'text.md') content.text = fs.readFileSync(path.resolve(__dirname, directory, item), 'utf8');
        // If it's a javascript file assing the obejct it returns to contents.
        // TODO consider adding some saftey check to ensure no existing properties are being replaced.
        if (path.extname(item) === '.js') {
            Object.assign(content, require(path.resolve(__dirname, directory, item)));
        }
        /** If it's a directory process its contents and save them as content.<directory name>. */
        if (!item.includes('.')) content[item] = processDirectoryContents(path.resolve(__dirname, directory, item), nextDepth);
    });

    return content;
}

module.exports = documentation;
