let data = require('../../../data/languages.js');

let html = `<div class="rules_list">`;

let languages = data.spokenLanguages;
for (let languageKey in languages) {
    let language = languages[languageKey];
    html += `<h4>${language.displayName}</h4><p><b>Related to: </b>${displayNameToString(language.relatedTo)}</p><p>${language.description}</p>`;
}
html += "</div>";

module.exports = html;


function displayNameToString(relatedArray) {
    if (!relatedArray || relatedArray.length === 0) return "None";
    let returnString = "";

    relatedArray.forEach((language, index) => {
        returnString += `${languages[language].displayName}`;
        if (index < relatedArray.length - 1 || relatedArray.length > 2) returnString += `, `;
        if (index === relatedArray.length - 2) returnString += " and ";
    });
    return returnString;
}
