let data = require('../../data/strains.js');
let response = {
    subChapters: {}
};

let html = `<div class="strain_container  rules_list">`;

for (let strainKey in data) {
    let strain = data[strainKey];
    let strainHtml = ``;
    strainHtml += `<div class="strain_container__${strainKey}">`;
    strainHtml += `<h3>${strain.displayName}</h3><ul>`;
    strainHtml += `<li><b>Physical Appearance: </b>${strain.physicalAppearance}</li>`;
    strainHtml += `<li><b>History: </b>${strain.history}</li>`;
    strainHtml += `<li><b>Family/Social Structure: </b>${strain.familySocialStructure}</li>`;
    strainHtml += `<li><b>Breeding: </b>${strain.breeding}</li>`;
    strainHtml += `<li><b>Place in Society: </b>${strain.placeInSociety}</li>`;
    strainHtml += `<li><b>Naming Conventions: </b>${strain.namingConventions}</li>`;
    strainHtml += `<li><b>Size: </b>${strain.size}</li>`;
    strainHtml += `<li><b>Speed: </b>${strain.speed}</li>`;
    strainHtml += `<li><b>Attribute Modifiers: </b>${strain.attributeModifiers.description}</li>`;
    strainHtml += `<li><b>Strain Traits: </b></li>`;
    strainHtml += "</ul>";

    html += strainHtml;
    response.subChapters[strainKey] = strainHtml;
}
html += `</div>`;

response.html = html;
module.exports = response;
