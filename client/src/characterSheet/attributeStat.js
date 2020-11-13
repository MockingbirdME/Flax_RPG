import React, { } from "react";

const AttributeStat = props => {
  const {blankSheet, stats, target = [], style = {}} = props;

  if (blankSheet) return <input type="text" />;
  
  let value = "";
  let index = 0;
  let currentStat = {...stats};
  
  for (const step of target) {
    if (!currentStat[step] && isNaN(currentStat[step])) break;
    index++;
    if (index >= target.length) value = currentStat[step];
    else currentStat = currentStat[step];
  }
  
  
  return (
    <span className="character_sheet__body__group__item__levels__level__boxed__stat" style={style}>{value}
    </span>
  );
};

export default AttributeStat;
