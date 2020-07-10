import React, { useContext, useState, Fragment } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";

import SkillPicker from "./characterTypeSkillPicker";


const CharacterTraitPicker = props => {
  const [showOptions, setShowOptions] = useState(true); 
  const charContext = useContext(CharacterContext);
  const traitContext = useContext(TraitContext);
  const {traits} = traitContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;
    
  const selectedTrait = charContext.characters[charId].baseCharData.traitsList[props.index] ? traits[charContext.characters[charId].baseCharData.traitsList[props.index].name] : null;

  const changeSelectedCharacterTrait = event => {
    const trait = {name: event.target.value, options: traits[event.target.value].options};
    charContext.setCharacterTrait(charId, props.index, trait);
  };
  
  const defaultOptions = [<option disabled hidden style={{display: "none"}} value="" key="default">-- select a character type --</option>];
    
  const {availableTraits} = charContext.characters[charId].calculatedStats;
  
  if (selectedTrait && !availableTraits.some(trait => trait.id === selectedTrait.id)) defaultOptions.push(<option value={selectedTrait.id} key={selectedTrait.id}>{selectedTrait.displayName}</option>);
  
  const options = Object.keys(traits).length 
    ? defaultOptions.concat(availableTraits
      .filter(eligibleTrait => {
        if (traits[eligibleTrait.traitId].type === "Character Type") return false;
        if (selectedTrait && traits[eligibleTrait.traitId].id === selectedTrait.id) return false;
        return true;
      })
      .map(eligibleTrait => {
        const {traitId} = eligibleTrait;
        return <option key={traitId} value={traitId}>
          {traits[traitId].displayName}
        </option>;
      }))
    : [];

  return (
    <div className="" >
      <h3 style={{display: "flex", justifyContent: "space-between", maxWidth: "80rem"}}>
        {options.length > 1 
          ? <span>
            <select
              style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
              value={(selectedTrait && selectedTrait.id) || ""}
              onChange={ev => changeSelectedCharacterTrait(ev)}
            >
              {options}
            </select>
          </span>
          : <p>No traits available</p>
        }
      </h3>
    </div>
  );
};

export default CharacterTraitPicker;
