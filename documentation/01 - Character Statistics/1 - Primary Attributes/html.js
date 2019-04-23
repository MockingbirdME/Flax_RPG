let data = require('../../../data/primary_attributes.js');

let html = `<p>Character’s have four primary attributes that describe their physical and mental talents. Primary attributes play a key role in determining a character’s potential for success in various actions.<p>`;

Object.keys(data).forEach(attribute => {
    html += `<p><b>${attribute.charAt(0).toUpperCase() + attribute.slice(1)} - </b>${data[attribute].description}</p>`;
});

module.exports = html;
