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
    
  // const selectedTrait = charContext.characters[charId].baseCharData.traitsList[props.index] ? traits[charContext.characters[charId].baseCharData.traitsList[props.index].name] : null;
  // console.log(selectedTrait);

  const changeSelectedCharacterTrait = value => {
    console.log(value);
    if (props.onChange) return props.onChange(value);
    const trait = {name: value, options: traits[value].options};
    charContext.setCharacterTrait(charId, props.index, trait);
  };
  
  // const defaultOptions = [<option disabled hidden style={{display: "none"}} value="" key="default">-- select a trait --</option>];
  // 
  // const {availableTraits} = charContext.characters[charId].calculatedStats;
  // 
  // if (selectedTrait && !availableTraits.some(trait => trait.id === selectedTrait.id)) defaultOptions.push(<option value={selectedTrait.id} key={selectedTrait.id}>{selectedTrait.displayName}</option>);
  // console.log(availableTraits);
  // const options = Object.keys(traits).length 
  //   ? defaultOptions.concat(availableTraits
  //     .filter(eligibleTrait => {
  //       console.log(eligibleTrait);
  //       if (traits[eligibleTrait.traitId].type === "Character Type") return false;
  //       if (selectedTrait && eligibleTrait.traitId === selectedTrait.id) return false;
  //       console.log('going to return it');
  //       return true;
  //     })
  //     .map(eligibleTrait => {
  //       console.log(eligibleTrait);
  //       const {traitId} = eligibleTrait;
  //       return <option key={traitId} value={traitId}>
  //         {traits[traitId].displayName}
  //       </option>;
  //     }))
  //   : [];
  // 
  // console.log(options);
  
  const options = props.options || [];
  
  //   <h3 style={{display: "flex", justifyContent: "space-between", maxWidth: "80rem"}}>
  // </h3>


  // TODO Add pickers for options. 
  return (
    <Fragment >
      {options.length > 1 
        ? <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={(props.currentValue && props.currentValue.id) || ""}
          onChange={ev => changeSelectedCharacterTrait({name: ev.target.value})}
        >
          {options}
        </select>
        : <p>No traits available</p>
      }
    </Fragment>
  );
};

export default CharacterTraitPicker;
