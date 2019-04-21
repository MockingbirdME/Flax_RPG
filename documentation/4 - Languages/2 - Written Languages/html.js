let data = require('../../../data/languages.js');

let html = `<div class="rules_list">`;

let languages = data.writtenLanguages;
for (let languageKey in languages) {
    let language = languages[languageKey];
    html += `<h4>${language.displayName}</h4><p>${language.description}</p>`;
}
html += "</div>";

module.exports = html;
