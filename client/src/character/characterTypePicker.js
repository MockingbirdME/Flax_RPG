import React, { useContext, useState, Fragment } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";

import SkillPicker from "./characterTypeSkillPicker";


const CharacterTypePicker = props => {
  const [showOptions, setShowOptions] = useState(true); 
  const charContext = useContext(CharacterContext);
  const traitContext = useContext(TraitContext);
  const {traits} = traitContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;
    
  const selectedCharacterType = charContext.characters[charId].baseCharData.characterType.name ? traits[charContext.characters[charId].baseCharData.characterType.name] : null;

  const changeCharacterType = event => {
    const trait = {name: event.target.value, options: traits[event.target.value].options};
    charContext.setCharacterType(charId, trait);
  };
  
  const options = Object.keys(traits).length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- select a character type --</option>].concat(Object.keys(traits)
      .filter(traitId => traits[traitId].type === "Character Type")
      .map(traitId => (
        <option key={traitId} value={traitId}>
          {traits[traitId].displayName}
        </option>
      )))
    : [];
    
  const baseSkillPickers = selectedCharacterType && selectedCharacterType.options.baseSkills 
    ? (
      <div>
        <h4 style={{margin: "0 0 0 1rem"}}>Select Base Skills</h4>
        <ul>
          {[...Array(selectedCharacterType.options.baseSkills.count)].map((value, index) => <li><SkillPicker level="baseSkills" key={index} index={index} secondaryCount={selectedCharacterType.options.baseSkills.secondarySkillsEach} /></li>)}
        </ul>
        
        
      </div>
    ) : "";
    
  const expertSkillPickers = selectedCharacterType && selectedCharacterType.options.expertSkills && selectedCharacterType.options.expertSkills.count 
    ? (
      <div>
        <h4 style={{margin: "0 0 0 1rem"}}>Select Expert Skills</h4>
        <ul>
          {[...Array(selectedCharacterType.options.expertSkills.count)].map((value, index) => <li><SkillPicker level="expertSkills" key={index} index={index} secondaryCount={selectedCharacterType.options.expertSkills.secondarySkillsEach} /></li>)}
        </ul>
      </div>
    ) : "";
    
  const optionsToggler = charContext.characters[charId].baseCharData.characterType.name
    ? <p style={{margin: "auto", color: "grey", size: "small"}} onClick={ev => setShowOptions(!showOptions)}>Toggle Skill Picker Display</p> : "";
  
  const skillPickers = showOptions ? (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "70rem"}}>
      {baseSkillPickers}
      {expertSkillPickers}
    </div>
  ) : "";
  
  return (
    <div className="" >
      <h2>
        <span>
          Character Type:
          <select
            style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
            value={charContext.characters[charId].baseCharData.characterType.name || ""}
            onChange={ev => changeCharacterType(ev)}
          >
            {options}
          </select>
        </span>
        {optionsToggler}
      </h2>
      {skillPickers}
    </div>
  );
};

export default CharacterTypePicker;
