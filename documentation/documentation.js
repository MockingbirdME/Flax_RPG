const fs = require('fs');
const path = require('path');

// The parent directory for all documentaiton to be processed.
const CHAPTERS_DIRECTORY = path.resolve(__dirname, '../documentation');

// TODO test if this can just be exported directly with no variable needed.
let documentation = {
    documentation: ""
};

processDirectoryContents(CHAPTERS_DIRECTORY, 'documentation', 1);

// To process the directory.
function processDirectoryContents(directory, path, depth) {
    console.log(directory, depth);


}

module.exports = documentation;
