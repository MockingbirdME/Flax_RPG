import React, { useContext, useState, Fragment } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";

import SkillPicker from "./characterTypeSkillPicker";

import OptionSelector from "./optionSelector";


const CharacterTypePicker = props => {
  const [showOptions, setShowOptions] = useState(true); 
  const charContext = useContext(CharacterContext);
  const traitContext = useContext(TraitContext);
  const {traits} = traitContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;

  const characterTraits = charContext.characters[charId].traits;

  const selectedCharacterType = (characterTraits && characterTraits.find(trait => trait.type === "Character Type")) || {};

  const changeCharacterType = (name, selectedOptions) => {
    console.log(name);
    console.log(selectedOptions);
    charContext.setCharacterType(charId, {name, selectedOptions});
  };
  
  const options = Object.keys(traits)
    .filter(traitId => traits[traitId].type === "Character Type");
  
  return (
    <div className="" >
      <h2 className="character_type_picker">
        Character Type:
        <OptionSelector 
          defaultSelectionType="character type"
          options={options} 
          keyType="trait"
          onChange={changeCharacterType} 
          currentValue={selectedCharacterType} />
      </h2>
    </div>
  );
};

export default CharacterTypePicker;
