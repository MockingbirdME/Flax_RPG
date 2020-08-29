import React, { useContext, useState } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";


const CharacterAttributeMinMaxPicker = props => {
  const [minMaxAttributes, setMinMaxAttributes] = useState({
    bonus: "",
    penalty: ["", ""]
  });
  const [attributeModifiers, setAttributeModifiers] = useState({
    body: 0,
    reflexes: 0,
    perception: 0,
    mind: 0,
    any: 0
  });
  const context = useContext(CharacterContext);
  const { charId } = useParams();

  if (!context.characters[charId]) return <div></div>;

  const changeAttributeMinMaxOptions = (index, value) => {
    const newMinMaxAttributes = {...minMaxAttributes};
    const newAttributeModifiers = {...attributeModifiers};
    
    // If index is null, we're working with the bonus attribute. 
    if (index === null) {
      // Lower any previously bonus attribute.
      if (attributeModifiers[minMaxAttributes.bonus]) newAttributeModifiers[minMaxAttributes.bonus]--;
      // If we're unsetting it also unset all penalty attributes.
      if (!value) newMinMaxAttributes.penalty.map(value => {
        if (value) newAttributeModifiers[value]++;
        return "null";
      });
      // Set the new bonus attribute and update its modifier. 
      newMinMaxAttributes.bonus = value;
      newAttributeModifiers[value]++;
    } 
    else { // Otherwise we're working with a penalty attribute.
      // If this index previously held a value undo the penalty it imposed.
      if (attributeModifiers[minMaxAttributes.penalty[index]]) newAttributeModifiers[minMaxAttributes.penalty[index]]++;
      // Set the new penalty attribute and update its modifer.
      newMinMaxAttributes.penalty[index] = value;
      newAttributeModifiers[value]--;
    }

    // Update the state values with their new counterparts.
    setMinMaxAttributes(newMinMaxAttributes);
    setAttributeModifiers(newAttributeModifiers);
  
    // Set the character's baseAttributeModifiers.
    context.setCharacterBaseAttributeModifiers(charId, newAttributeModifiers);
  };
  
  const bonusAttributePicker = (
    <div>
      <h2  className="character_editor_section_header" >Bonus Attribute (optional)</h2>
      <select
        style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
        value={minMaxAttributes.bonus}
        onChange={ev => changeAttributeMinMaxOptions(null, ev.target.value)}
      >
        <option value={""} key="default">No Attribute Bonus</option>
        <option value="body" key="body">+1 Body</option>
        <option value="reflexes" key="reflexes">+1 Reflexes</option>
        <option value="perception" key="perception">+1 Perception</option>
        <option value="mind" key="mind">+1 Mind</option>
      </select>
    </div>
  );
  
  const penaltyAttributesOptions = [
    <option disabled hidden style={{display: "none"}} value={""} key="default">Select one</option>,
    <option value="body" key="body">-1 Body</option>,
    <option value="reflexes" key="reflexes">-1 Reflexes</option>,
    <option value="perception" key="perception">-1 Perception</option>,
    <option value="mind" key="mind">-1 Mind</option>
  ].filter(option => option.key !== minMaxAttributes.bonus);

  
  const penaltyAttributesPicker = minMaxAttributes.bonus 
    ? (
      <div>
        <h4 style={{textAlign: "center"}}>Penalty Attributes</h4>
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={minMaxAttributes.penalty[0] || ""}
          onChange={ev => changeAttributeMinMaxOptions(0, ev.target.value)}
        >
          {penaltyAttributesOptions}
        </select>
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={minMaxAttributes.penalty[1] || ""}
          onChange={ev => changeAttributeMinMaxOptions(1, ev.target.value)}
        >
          {penaltyAttributesOptions}
        </select>
      </div>
    ) : "";

  return (
    <div className="" style={{display: "flex"}} >
      <div style={{display: "flex"}}>
        {bonusAttributePicker}{penaltyAttributesPicker}
      </div>
      
    </div>
  );
};

export default CharacterAttributeMinMaxPicker;
