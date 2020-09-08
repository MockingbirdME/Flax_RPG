
function getSkillList(skills, {hasSecondaryAtRank, hasSecondaryUnderRank, include = [], maxRank, minimumSecondaryRanks, neededSecondaryMatches = 1, requiredRank}) {
  return Object.keys(skills).filter(id => {
    const skill = skills[id];
    if (include.includes(id)) return true;
    if (Number.isInteger(maxRank) && skill.rank > maxRank) return false;
    if (Number.isInteger(requiredRank) && skill.rank !== requiredRank) return false;
    if (Number.isInteger(hasSecondaryAtRank) && !skill.secondarySkills) return false;
    if (Number.isInteger(hasSecondaryAtRank) && Object.keys(skill.secondarySkills).filter(secondaryId => secondaryId !== "exampleSkill" && skill.secondarySkills[secondaryId].rank === hasSecondaryAtRank).length < neededSecondaryMatches) return false;
    if (Number.isInteger(hasSecondaryUnderRank) && Object.keys(skill.secondarySkills).filter(secondaryId => secondaryId !== "exampleSkill" && skill.secondarySkills[secondaryId].rank < hasSecondaryUnderRank).length < neededSecondaryMatches) return false;
    if (minimumSecondaryRanks && Object.keys(skill.secondarySkills).reduce((acc, secondaryId) => skill.secondarySkills[secondaryId].rank + acc, 0) < minimumSecondaryRanks) return false;
    
    return true;
  });
}

function duelistDescription(character) {
  console.log(character.getVariable('duelist', {key: 'skillChecks'}));
  console.log(character.getVariable('duelist', {key: 'condition'}));
  console.log(character.getVariable('duelist', {key: 'bonus'}));
  return `You may spend one action point to target one character within ${character.getVariable('duelist', {key: 'range'})} hexes to be your dueling opponent. You may spend a reaction point to add one penalty die to ${character.getVariable('duelist', {key: 'skillChecks'})} made against you by your dueling opponent this round${character.getVariable('duelist', {key: 'condition'})}${character.getVariable('duelist', {key: 'bonus'})}. A character stops being your dueling opponent if they are no longer withing ${character.getVariable('duelist', {key: 'range'})} hexes of you, they lose consciousness, or you choose a new dueling opponent.`;
}


module.exports = {
  getSkillList,
  duelistDescription
};
