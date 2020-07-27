import React, { useContext, Fragment } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import SkillContext from "../contexts/skill";

const CharacterTypeSkillPicker = props => {
  const charContext = useContext(CharacterContext);
  const skillContext = useContext(SkillContext);
  const {skills} = skillContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;

  const selectSkill = event => {
    charContext.setCharacterTypeOption(charId, props.level, props.index, event.target.value);
  };
  
  const characterTypeOptions = charContext.characters[charId].baseCharData.characterType.options;
  
  const selectedSkill = characterTypeOptions[props.level][props.index];
  
  const nonOptionalSkills = Object.keys(skills).filter((key, index) => {
    const otherSkillsAtLevel = characterTypeOptions[props.level].map(option => option.name).filter((skill, index) => index !== props.index);

    if (otherSkillsAtLevel.includes(key)) return true;
    if (props.level === "expertSkills") {
      const selectedBaseSkills = characterTypeOptions.baseSkills.map(skill => skill.name);
      if (!selectedBaseSkills.includes(key)) return true;
    }
    return false;
    
  });
  
  const primarySkillOptions = Object.keys(skills).length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- select an option --</option>].concat(Object.keys(skills)
      .filter(key => !nonOptionalSkills.includes(key))
      .map(skillId => (
        <option key={skillId} value={skillId}>
          {skills[skillId].displayName}
        </option>
      )))
    : [];
    
  const selectedPrimarySkill = selectedSkill && selectedSkill.name;
    
  const primarySkillSelector = primarySkillOptions.length > 1
    ? (
      <select
        style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
        value={selectedPrimarySkill || ""}
        onChange={ev => selectSkill(ev)}
      >
        {primarySkillOptions}
      </select>
    ) : "";
  
  const secondarySkills = props.secondaryCount 
    ? (
      <Fragment>
        {[...Array(props.secondaryCount)].map((value, index) => <SecondarySkillPicker baseSkill={selectedPrimarySkill} key={index} index={index} level={props.level} baseSkillIndex={props.index} />)}
      </Fragment>
    ) : "";

  return (
    <div className="" style={{paddingLeft: "2rem"}}>
      <h4>
        {primarySkillOptions.length > 1
          ? (
            "Primary Skill:",
            primarySkillSelector
          ) : <p>--- Please select at least one {props.level === "expertSkills" ? "Base" : "Lower Level"} skill ---</p>}
        
      </h4>
      {selectedPrimarySkill 
        ? (
          <Fragment>
            <p>
              {`Secondary Skill${props.secondaryCount > 1 ? 's' : ''}:`}
            </p> 
            {secondarySkills}
          </Fragment>
        ) 
        : ""}
    </div>
  );
};

export default CharacterTypeSkillPicker;


const SecondarySkillPicker = props => {
  const charContext = useContext(CharacterContext);
  const skillContext = useContext(SkillContext);
  const {skills} = skillContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;

  const selectSecondarySkill = event => {
    charContext.setCharacterTypeOption(charId, props.level, props.baseSkillIndex, null, props.index, event.target.value);
  };
  
  const characterTypeOptions = charContext.characters[charId].baseCharData.characterType.options;

  const selectedSkill = characterTypeOptions[props.level][props.baseSkillIndex];
  
  const nonOptionalSkills = Object.keys(skills).filter((key, index) => {
    const otherSkillsAtLevel = characterTypeOptions[props.level].map(option => option.name).filter((skill, index) => index !== props.index);

    if (otherSkillsAtLevel.includes(key)) return true;
    if (props.level === "expertSkills") {
      const selectedBaseSkills = characterTypeOptions.baseSkills.map(skill => skill.name);
      if (!selectedBaseSkills.includes(key)) return true;
    }
    return false;
    
  });
  
  const {secondarySkills} = skills[props.baseSkill];
  
  const secondarySkillList = Object.keys(secondarySkills).filter(key => {
    const otherSelectedSecondarySkills = characterTypeOptions[props.level][props.baseSkillIndex].secondarySkills.filter((skill, index) => index !== props.index);
    
    return !otherSelectedSecondarySkills.includes(key);
  });
  
  const secondarySkillOptions = Object.keys(secondarySkillList).length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- select an option --</option>].concat(secondarySkillList
      .filter(key => !nonOptionalSkills.includes(key))
      .map(skillId => (
        <option key={skillId} value={skillId}>
          {secondarySkills[skillId].displayName}
        </option>
      )))
    : [];
    
  const selectedSecondarySkill = selectedSkill && selectedSkill.secondarySkills[props.index];
  
  const secondarySkillSelector = (
    <select
      style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
      value={selectedSecondarySkill || ""}
      onChange={ev => selectSecondarySkill(ev)}
    >
      {secondarySkillOptions}
    </select>
  );
  
  return secondarySkillSelector;
};
