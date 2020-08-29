import React, { } from "react";
import SkillBox from "./skillBox";

const CharacterSheetSkills = props => {
  const processCamelCase = (text) => text.charAt(0).toUpperCase() + text.slice(1).replace(/([A-Z])/gu, " $1");
  
  // TODO make it so all skills can be displayed and specific skills can be toggled.
  const skills = props.skills || {};

  const expandedSkills = Object.keys(skills)
    .map(skill => ({...skills[skill], name: processCamelCase(skill)})) || [];

  const skillsToDisplay = expandedSkills.filter(skill => skill.rank > 0 || Object.keys(skill.secondarySkills).some(secondarySkill => skill.secondarySkills[secondarySkill].rank > 0));
  
  while (skillsToDisplay.length < 9) skillsToDisplay.push({});
        
  return (
    <div className="character_sheet__body__content__outer__container">
      <div className="character_sheet__body__content__container__column" >
        <h4 style={{margin: "0 0 -.5rem"}}>Skills</h4>
        <div className="character_sheet__body__content__container__row character_sheet__body__group_wrap">
          {skillsToDisplay.map((skill, index) => <SkillBox {...skill} blankSheet={props.blankSheet} key={index} />)}
        </div>
      </div>
    </div>
    
  );
};


export default CharacterSheetSkills;
