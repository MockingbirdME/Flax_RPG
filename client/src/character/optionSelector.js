import React, { useContext, useState, Fragment } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";
import SkillContext from "../contexts/skill";

import SkillPicker from "./characterTypeSkillPicker";


const OptionSelector = props => {
  const [showOptions, setShowOptions] = useState(true); 
  const charContext = useContext(CharacterContext);
  const skillContext = useContext(SkillContext);
  const traitContext = useContext(TraitContext);
  const {skills} = skillContext;
  const {traits} = traitContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;

  const changeSelectedCharacterTrait = (value, options = {}) => {
    console.log(value);
    if (props.onChange) return props.onChange(value, options);
    const trait = {name: value, options: traits[value].options};
    charContext.setCharacterTrait(charId, props.index, trait);
  };
  
  const changeSubOption = (value, id) => {
    console.log(value);
    console.log(props);
    props.onChange(props.currentValue.id, {...props.currentValue.selectedOptions, [id]: value});
  };
  
  const selectableOptionKeys = props.options || [];

  const selectableOptions = selectableOptionKeys.length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- {props.defaultSelectionType ? `select a ${props.defaultSelectionType}` : "select one"} --</option>].concat(selectableOptionKeys
      .map(key => {
        if (props.keyType === 'trait') return (
          <option key={key} value={key}>
            {traits[key].displayName}
          </option>);

        if (props.keyType === 'skill') return (
          <option key={key} value={key}>
            {skills[key].displayName}
          </option>);
        return '';
      }))
    : [];

  //   <h3 style={{display: "flex", justifyContent: "space-between", maxWidth: "80rem"}}>
  // </h3>


  // TODO Add pickers for options. 
  const subOptions = props.currentValue.options || [];
  console.log(props);
  const subOptionsDisplay = subOptions.map((option, index) => {
    // TODO handle cases of no option.options or non-object, non-array, option.options.
  
    console.log(option);
    const options = Array.isArray(option.options)
      ? option.options 
      : Object.keys(option.options);
  
  
    return (
      <OptionSelector 
        key={option.id}
        id={option.id}
        defaultSelectionType={option.type}
        isOption={true}
        options={options}
        selectedOptions={props.currentValue.selectedOptions} 
        keyType={option.type || "string"}
        onChange={changeSubOption} 
        currentValue="" />
    );
  });
  
  
  return (
    <div >
      {selectableOptions.length > 1 
        ? <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={(props.currentValue && props.currentValue.id) || ""}
          onChange={ev => {
            const {value} = ev.target;
            if (props.onChange) props.onChange(value, props.id);
            else changeSelectedCharacterTrait(value);
          }}
        >
          {selectableOptions}
        </select>
        : <p>No traits available</p>
      }
      <div>
        {subOptionsDisplay}
      </div>
    </div>
  );
};

export default OptionSelector;
