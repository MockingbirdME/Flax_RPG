
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


module.exports = {
  getSkillList
};
