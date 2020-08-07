import React, { } from "react";

import AttributeStat from "./attributeStat";
import SecondarySkillItem from './secondarySkillItem.js';

const SkillBox = props => {
  const processCamelCase = (text) => text.charAt(0).toUpperCase() + text.slice(1).replace(/([A-Z])/gu, " $1");
  
  // TODO make it so all skills can be displayed and specific skills can be toggled.
  const secondarySkills = props.secondarySkills || {};
  const expandedSecondarySkills = Object.keys(secondarySkills)
    .map(skill => ({...secondarySkills[skill], name: processCamelCase(skill)})) || [];
    
  const secondarySkillsToDisplay = expandedSecondarySkills.filter(skill => skill.rank > 0);
    
  const secondarySkillsDiv = [];
  for (let index = 0; index < 2 || index < secondarySkillsToDisplay.length; index++) {
    secondarySkillsDiv.push(<SecondarySkillItem key={index} {...secondarySkillsToDisplay[index]} />);
  }
  
  const nameDisplay = props.name 
    ? props.name
    : <span className="character_sheet__background_text">
      Skill Name
    </span>;

  return (
    <div className="character_sheet__body__group__item">
      <div className="character_sheet__body__group__item__levels">
        <div className="character_sheet__body__group__item__levels__level character_sheet__body__primary_skill">
          <h5>
            {nameDisplay}
          </h5>
          <AttributeStat blankSheet={props.blankSheet} stats={props} target={["rank"]} />
        </div>
        {secondarySkillsDiv}
      </div>
    </div>
  );
};


export default SkillBox;
