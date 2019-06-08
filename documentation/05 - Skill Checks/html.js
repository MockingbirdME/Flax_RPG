let marked = require('marked');
let fs = require('fs');
let path = require('path');
let data = require('../../data/skill_checks.js');

let response = {
    subChapters: {}
};

let html = marked(fs.readFileSync(path.resolve(__dirname, 'markdown.md'), 'utf8'));

html += `<div class="skill_check_container rules_list">`;
for (let skillCheckKey in data) {
    let skillCheck = data[skillCheckKey];
    let skillCheckHtml = `<div class="skill_check_container_${skillCheckKey}">`;

    skillCheckHtml += `<h4>${skillCheck.displayName}</h4> <ul>`;
    skillCheckHtml += `<li><b>Primary Attribute</b> - ${skillCheck.primaryAttribute}</li>`;
    skillCheckHtml += `<li><b>Primary Skill</b> - ${skillCheck.primarySkill}</li>`;
    skillCheckHtml += `<li><b>Relevant Secondary Skill</b> - ${skillCheck.relevantSecondarySkills}</li>`;
    skillCheckHtml += `<li><b>Aiding Others</b> - ${skillCheck.aidingOthers}</li>`;
    skillCheckHtml += `<li><b>Description</b> - ${skillCheck.description}</li>`;
    skillCheckHtml += `<li><b>Difficulty</b> - ${skillCheck.difficulty}</li>`;
    skillCheckHtml += `<li><b>Required Successes</b> - ${skillCheck.requiredSuccesses}</li>`;
    skillCheckHtml += `<li><b>Failure</b> - ${skillCheck.failure}</li>`;
    skillCheckHtml += `<li><b>Near Success</b> - ${skillCheck.nearSuccess}</li>`;
    skillCheckHtml += `<li><b>Complete Success</b> - ${skillCheck.completeSuccess}</li>`;
    skillCheckHtml += `<li><b>Additional Successes</b> - ${skillCheck.additionalSuccesses}</li>`;


    skillCheckHtml += `</ul></div>`;

    html += skillCheckHtml;

    response.subChapters[skillCheckKey] = skillCheckHtml;
}

html += `</div>`;
response.html = html;
module.exports = response;
