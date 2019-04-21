let data = require('../../../data/other_attributes.js');

let html = `<p>These statistics and resources are derived from the character’s strain, primary attributes, and skills.</p>`;

Object.keys(data).forEach(attribute => {
    html += `<p><b>${data[attribute].displayName}</b></p><ul><li><b>Description: </b>${data[attribute].description}</li><li><b>Base Value: </b>${data[attribute].baseValue}</li></ul>`;
});

module.exports = html;
