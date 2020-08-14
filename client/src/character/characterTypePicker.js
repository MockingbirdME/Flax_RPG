import React, { useContext, useState, Fragment } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";

import SkillPicker from "./characterTypeSkillPicker";

import TraitPicker from "./characterTraitPicker";


const CharacterTypePicker = props => {
  const [showOptions, setShowOptions] = useState(true); 
  const charContext = useContext(CharacterContext);
  const traitContext = useContext(TraitContext);
  const {traits} = traitContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;
    console.log(charContext.characters[charId]);
  const characterTraits = charContext.characters[charId].traits;

  const selectedCharacterType = (characterTraits && characterTraits.find(trait => trait.type === "Character Type")) || {};
console.log(selectedCharacterType);
  const changeCharacterType = value => {
    console.log(value);
    charContext.setCharacterType(charId, value);
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
    
  // const baseSkillPickers = selectedCharacterType && selectedCharacterType.options.baseSkills 
  //   ? (
  //     <div>
  //       <h4 style={{margin: "0 0 0 1rem"}}>Select Base Skills</h4>
  //       <ul>
  //         {[...Array(selectedCharacterType.options.baseSkills.count)].map((value, index) => <li key={index} ><SkillPicker level="baseSkills" key={index} index={index} secondaryCount={selectedCharacterType.options.baseSkills.secondarySkillsEach} /></li>)}
  //       </ul>
  // 
  // 
  //     </div>
  //   ) : "";
    
  // const expertSkillPickers = selectedCharacterType && selectedCharacterType.options.expertSkills && selectedCharacterType.options.expertSkills.count 
  //   ? (
  //     <div>
  //       <h4 style={{margin: "0 0 0 1rem"}}>Select Expert Skills</h4>
  //       <ul>
  //         {[...Array(selectedCharacterType.options.expertSkills.count)].map((value, index) => <li key={index}><SkillPicker level="expertSkills" key={index} index={index} secondaryCount={selectedCharacterType.options.expertSkills.secondarySkillsEach} /></li>)}
  //       </ul>
  //     </div>
  //   ) : "";
    
  // const optionsToggler = charContext.characters[charId].characterType.name
  //   ? <p style={{margin: "auto", color: "grey", size: "small"}} onClick={ev => setShowOptions(!showOptions)}>Toggle Skill Picker Display</p> : "";
  
  const skillPickers = showOptions ? (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", maxWidth: "70rem"}}>
      {/* baseSkillPickers */}
      {/* expertSkillPickers */}
    </div>
  ) : "";
  
  return (
    <div className="" >
      <h2 className="character_type_picker">
        Character Type:
        <TraitPicker options={options} onChange={changeCharacterType} currentValue={selectedCharacterType} />
      </h2>
    </div>
  );
};

export default CharacterTypePicker;
