let data = require('../../../data/primary_attributes.js');

let markdown = `Character’s have four primary attributes that describe their physical and mental talents. Primary attributes play a key role in determining a character’s potential for success in various actions.`;

Object.keys(data).forEach(attribute => {
    markdown += `\n#### ${attribute.charAt(0).toUpperCase() + attribute.slice(1)}\n${data[attribute].description}`;
});

module.exports = markdown;
