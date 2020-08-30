
function getSkillList(skills, {requiredRank, include = []}) {
  return Object.keys(skills).filter(id => {
    if (include.includes(id)) return true;
    if (requiredRank && skills[id].rank !== requiredRank) return false;
    
    return true;
  });
}


module.exports = {
  getSkillList
};
