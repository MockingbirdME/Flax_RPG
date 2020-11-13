import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import SkillContext from "../contexts/skill";


const OptionSelector = props => {
  const charContext = useContext(CharacterContext);
  const skillContext = useContext(SkillContext);
  const {skills} = skillContext;
  const { charId } = useParams();
  
  if (
    !charContext.characters[charId]
    || !Object.keys(skills).length
  ) return <div></div>;
  
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
      .map((key, index) => {
        if (props.keyType === 'trait') {
          const keywords = key.keywords.filter(keyword => keyword !== 'Starting' && keyword !== "Simple").join(', ');
          return (
            <option key={index} value={key.id}>
              {`${key.displayName}${keywords ? ` - ${keywords}` : ""}`}
            </option>);
        }
          
        if (props.keyType === 'skill') return (
          <option key={index} value={key}>
            {skills[key].displayName}
          </option>);

        if (props.keyType === 'secondary skill') return (
          <option key={index} value={key}>
            {skills[props.parentValue].secondarySkills[key].displayName}
          </option>);
          
        if (props.keyType === 'attribute') return (
          <option key={index} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>);
              
        return '';
      }))
    : [];

  const subOptions = props.currentValue.options || [];
  
  const subOptionsDisplay = subOptions.map((option, index) => {  
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
  
  const selectedDescription = props.currentValue && props.currentValue.description
    ? <div className="character_option_selector_selected_description" dangerouslySetInnerHTML={{__html: props.currentValue.description}} />
    
    : "";

  return (
    <div >
      <div className="character_option_selector">
        {props.isOption ? <h4 style={{margin: "0"}}>{props.defaultSelectionType}</h4> : ""}
        {selectableOptions.length > 1 
          ? <select
            className="character_option_selector_selectable"
            style={{width: props.isOption ? "20rem" : "100%"}}
            value={(props.currentValue && props.currentValue.id) || ""}
            onChange={ev => props.onChange(ev.target.value, props.id)}
          >
            {selectableOptions}
          </select>
          : <select
            className="character_option_selector_selectable"
            style={{width: props.isOption ? "20rem" : "100%"}}
            value=""
            readOnly={true}
          >
            <option disabled hidden style={{display: "none"}} value="" key="default">-- No Options Available --</option>
          </select>
        }
      </div>
      {selectedDescription}
      {subOptionsDisplay}
    </div>
  );
};

export default OptionSelector;
