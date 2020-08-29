import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";
import SkillContext from "../contexts/skill";


const OptionSelector = props => {
  const charContext = useContext(CharacterContext);
  const skillContext = useContext(SkillContext);
  const traitContext = useContext(TraitContext);
  const {skills} = skillContext;
  const {traits} = traitContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;
  
  const changeSubOption = (value, optionId) => {
    const {id, options, selectedOptions = {}} = props.currentValue;
    
    options.forEach(option => {
      if (option.parentId === optionId) delete selectedOptions[option.id];
    });
    
    props.onChange(id, {...selectedOptions, [optionId]: value});
  };

  const selectableOptionKeys = props.options || [];

  const selectableOptions = selectableOptionKeys.length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- {props.defaultSelectionType ? `select a ${props.defaultSelectionType.toLowerCase()}` : "select one"} --</option>].concat(selectableOptionKeys
      .map(key => {
        if (props.keyType === 'trait') {
          const keywords = traits[key].keywords.filter(keyword => keyword !== 'Starting' && keyword !== "Simple").join(', ');
          return (
            <option key={key} value={key}>
              {`${traits[key].displayName}${keywords ? ` - ${keywords}` : ""}`}
            </option>);
        }
          
        if (props.keyType === 'skill') return (
          <option key={key} value={key}>
            {skills[key].displayName}
          </option>);

        if (props.keyType === 'secondary skill') return (
          <option key={key} value={key}>
            {skills[props.parentValue].secondarySkills[key].displayName}
          </option>);
              
        return '';
      }))
    : [];

  //   <h3 style={{display: "flex", justifyContent: "space-between", maxWidth: "80rem"}}>
  // </h3>

  // TODO Add pickers for options. 
  const subOptions = props.currentValue.options || [];
  
  const subOptionsDisplay = subOptions.map((option, index) => {
    // TODO handle cases of no option.options or non-object, non-array, option.options.
  
    const {options} = option;

    const optionsValue = (props.currentValue.selectedOptions && props.currentValue.selectedOptions[option.id]) || {};
    
    const newSelectedValue = typeof optionsValue === "string"
      ? {id: optionsValue}
      : optionsValue;

    const parentValue = option.parentValue || null;

    return (
      <OptionSelector 
        key={option.id}
        id={option.id}
        defaultSelectionType={option.displayName}
        isOption={true}
        options={options}
        parentValue={parentValue}
        selectedOptions={props.currentValue.selectedOptions} 
        keyType={option.type || "string"}
        onChange={changeSubOption} 
        currentValue={newSelectedValue} />
    );
  });
  
  const divStyle = props.isOption 
    ? {display: "flex", margin: ".5rem 0 0 2rem", justifyContent: "space-between", width: "32rem"}
    : {display: "flex", margin: ".5rem 0 0 0", justifyContent: "space-between", width: "34rem"};
  const selectStyle = props.isOption ? {fontSize: "1.5rem", textAlignLast: "center", width: "20rem"} : {fontSize: "1.5rem", textAlignLast: "center", width: "100%"};
  console.log(props);

  return (
    <div >
      <div style={divStyle}>
        {props.isOption ? <h4 style={{margin: "0"}}>{props.defaultSelectionType}</h4> : ""}
        {selectableOptions.length > 1 
          ? <select
            style={selectStyle}
            value={(props.currentValue && props.currentValue.id) || ""}
            onChange={ev => props.onChange(ev.target.value, props.id)}
          >
            {selectableOptions}
          </select>
          : <p>No traits available</p>
        }
      </div>
      {subOptionsDisplay}
    </div>
  );
};

export default OptionSelector;
