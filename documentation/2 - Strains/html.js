let data = require('../../data/strains.js');

let html = `<div class="strain_container  rules_list">`;

for (let strainKey in data) {
    let strain = data[strainKey];
    html += `<div class="strain_container__${strainKey}">`;
    html += `<h3>${strain.displayName}</h3><ul>`;
    html += `<li><b>Physical Appearance: </b>${strain.physicalAppearance}</li>`;
    html += `<li><b>History: </b>${strain.history}</li>`;
    html += `<li><b>Family/Social Structure: </b>${strain.familySocialStructure}</li>`;
    html += `<li><b>Breeding: </b>${strain.breeding}</li>`;
    html += `<li><b>Place in Society: </b>${strain.placeInSociety}</li>`;
    html += `<li><b>Naming Conventions: </b>${strain.namingConventions}</li>`;
    html += `<li><b>Size: </b>${strain.size}</li>`;
    html += `<li><b>Speed: </b>${strain.speed}</li>`;
    html += `<li><b>Attribute Modifiers: </b>${strain.attributeModifiers.description}</li>`;
    html += `<li><b>Strain Traits: </b></li>`;
    html += "</ul>";
}

html += `</div>`;


module.exports = html;
