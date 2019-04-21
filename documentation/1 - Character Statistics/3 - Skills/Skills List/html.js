let data = require('../../../../data/skills.js');

let html = `<div>`;

for (let skillKey in data) {
    let skill = data[skillKey];
    html += `<div className="skillList__${skillKey}"><h4>${skill.displayName}</h4><p>${skill.description}</p><p><b>Secondary Skills:</b></p><ul>`;

    for (let secondarySkillKey in skill.secondarySkills) {
        let secondarySkill = skill.secondarySkills[secondarySkillKey];
        if (secondarySkill.displayName) {
            html += `<li><b>${secondarySkill.displayName} - </b>${secondarySkill.description}</li>`;
        }
    }
    html += `</ul>`;
}


html += `</div>`;

module.exports = html;
