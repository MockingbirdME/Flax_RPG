import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";


const CharacterAttributeMinMaxPicker = props => {
  const context = useContext(CharacterContext);
  const { charId } = useParams();

  if (!context.characters[charId]) return <div></div>;
    
  const {baseAttributeModifiers} = context.characters[charId];
  
  const updateBaseAttributeModifiers = (index, value) => {
    // If index is null, we're working with the bonus attribute. 
    if (index === null) {
      // If we're unsetting it also unset all penalty attributes.
      if (!value) {
        delete baseAttributeModifiers.bonus;
        delete baseAttributeModifiers.penalty;
      }
      else {
        baseAttributeModifiers.bonus = value;
        baseAttributeModifiers.penalty = baseAttributeModifiers.penalty.filter(attribute => attribute !== value);
      }
    } 
    else { // Otherwise we're working with a penalty attribute.
      baseAttributeModifiers.penalty[index] = value;
    }
    // Set the character's baseAttributeModifiers.
    context.setCharacterBaseAttributeModifiers(charId, baseAttributeModifiers);
  };
  
  const bonusAttributePicker = (
    <div>
      <h2 className="character_editor_section_header" >Attribute Modifiers (optional)</h2>
      <div style={{paddingLeft: "2rem"}}>
        <h4 >
          Bonus
          <select
            style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
            value={baseAttributeModifiers.bonus || ""}
            onChange={ev => updateBaseAttributeModifiers(null, ev.target.value)}
          >
            <option value={""} key="default">No Attribute Bonus</option>
            <option value="body" key="body">+1 Body</option>
            <option value="reflexes" key="reflexes">+1 Reflexes</option>
            <option value="perception" key="perception">+1 Perception</option>
            <option value="mind" key="mind">+1 Mind</option>
          </select>
        </h4>
        
      </div>
      
    </div>
  );
  
  const penaltyAttributesOptions = [
    <option disabled hidden style={{display: "none"}} value={""} key="default">Select one</option>,
    <option value="body" key="body">-1 Body</option>,
    <option value="reflexes" key="reflexes">-1 Reflexes</option>,
    <option value="perception" key="perception">-1 Perception</option>,
    <option value="mind" key="mind">-1 Mind</option>
  ].filter(option => option.key !== baseAttributeModifiers.bonus);

  const penaltyAttributesPicker = baseAttributeModifiers.bonus 
    ? (
      <div  style={{paddingLeft: "2rem"}}>
        <h4 >
          Penalty
          <select
            style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
            value={baseAttributeModifiers.penalty[0] || ""}
            onChange={ev => updateBaseAttributeModifiers(0, ev.target.value)}
          >
            {penaltyAttributesOptions}
          </select>
          <select
            style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
            value={baseAttributeModifiers.penalty[1] || ""}
            onChange={ev => updateBaseAttributeModifiers(1, ev.target.value)}
          >
            {penaltyAttributesOptions}
          </select>
        </h4>
        
      </div>
    ) : "";

  return (
    <div className="" >
      {bonusAttributePicker}{penaltyAttributesPicker}
    </div>
  );
};

export default CharacterAttributeMinMaxPicker;
