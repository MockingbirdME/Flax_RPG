let data = require('../../../data/other_attributes.js');

let markdown = `These statistics and resources are derived from the character’s strain, primary attributes, and skills.`;

Object.keys(data).forEach(attribute => {
    markdown += `\n#### ${data[attribute].displayName}\n\n  *Description:* ${data[attribute].description}\n\n  *Base Value:* ${data[attribute].baseValue}`;
});

module.exports = markdown;
