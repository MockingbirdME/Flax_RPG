let marked = require('marked');
let fs = require('fs');
let path = require('path');
let actionsData = require('../../data/combat_actions.js');
let reactionsData = require('../../data/reactions.js');
let combatModifersData = require('../../data/combat_modifiers.js');

let response = {
    subChapters: {}
};

let html = marked(fs.readFileSync(path.resolve(__dirname, 'markdown.md'), 'utf8'));

html += `<h3>Movement Actions</h3>`;
for (let actionKey in actionsData) {
    if (actionsData[actionKey].type !== "Movement") continue;
    html += getActionHtml(actionKey);
}
html += `<h3>Melee Actions</h3>`;
for (let actionKey in actionsData) {
    if (actionsData[actionKey].type !== "Melee") continue;
    html += getActionHtml(actionKey);
}
html += `<h3>Ranged Actions</h3>`;
for (let actionKey in actionsData) {
    if (actionsData[actionKey].type !== "Ranged") continue;
    html += getActionHtml(actionKey);
}
html += `<h3>Magic Actions</h3>`;
for (let actionKey in actionsData) {
    if (actionsData[actionKey].type !== "Magic") continue;
    html += getActionHtml(actionKey);
}
html += `<h3>Defensive Actions</h3>`;
for (let actionKey in actionsData) {
    if (actionsData[actionKey].type !== "Defensive") continue;
    html += getActionHtml(actionKey);
}
html += `<h3>Other Actions</h3>`;
for (let actionKey in actionsData) {
    if (actionsData[actionKey].type !== "Other") continue;
    html += getActionHtml(actionKey);
}

html += `<h2>Reactions</h2><p>Reactions are special actions that are taken outside of the character's turn. A character can make only one reaction between each of their turns. Reactions have no turn requirement even if they specify taking an action that normally would.</p><ul class=rules_list>`;
for (let reactionKey in reactionsData) {
    let reaction = reactionsData[reactionKey];
    let reactionHtml = `<div class="action_container_${reactionKey}"><ul class=rules_list>`;
    reactionHtml += `<h4>${reaction.displayName}</h4>`;
    reactionHtml += `${reaction.description}</ul></div>`;

    response.subChapters[`reactions/${reactionKey}`] = reactionHtml;
    html += reactionHtml;
}
html += `</ul></div>`;
html += `<h2>Combat Modifers</h2><p>Various conditions can affect a combat situation, changing the difficult to hit a target.</p><ul class=rules_list>`;
for (let combatModiferKey in combatModifersData) {
    let combatModifer = combatModifersData[combatModiferKey];
    let combatModiferHtml = `<div class="action_container_${combatModiferKey}"><ul class=rules_list>`;
    combatModiferHtml += `<h4>${combatModifer.displayName}</h4>`;
    combatModiferHtml += `${combatModifer.description}</ul></div>`;

    response.subChapters[`combatModifers/${combatModiferKey}`] = combatModiferHtml;
    html += combatModiferHtml;
}
html += `</ul></div>`;
response.html = html;
module.exports = response;


function getActionHtml(actionKey) {
    let action = actionsData[actionKey];
    let actionHtml = `<div class="action_container_${actionKey}"><ul class=rules_list>`;
    actionHtml += `<h4>${action.displayName}</h4><ul>`;
    if (action.requirements) actionHtml += `<li><b>Requiremets</b> - ${action.requirements}</li>`;
    actionHtml += `<li><b>Action Point Cost</b> - ${action.actionPointCost}</li>`;
    actionHtml += `<li><b>Stamina Cost</b> - ${action.staminaCost}</li></ul>`;
    actionHtml += `${action.description}</ul></div>`;
    response.subChapters[`actions/${actionKey}`] = actionHtml;
    return actionHtml;
}
