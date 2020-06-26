import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";


const CharacterAttributeMinMaxPicker = props => {
  const context = useContext(CharacterContext);
  const { charId } = useParams();

  if (!context.characters[charId]) return <div></div>;

  const changeAttributeMinMaxOptions = (type, index, event) => {
    context.setCharacterMinMaxAttributes(charId, type, index, event.target.value);
  };
  
  const bonusAttributePicker = (
    <div>
      <h4>Bonus Attribute (optional)</h4>
      <select
        style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
        value={context.characters[charId].baseCharData.minMaxAttributes.bonus || ""}
        onChange={ev => changeAttributeMinMaxOptions("bonus", null, ev)}
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
    <option value="body" key="body">+1 Body</option>,
    <option value="reflexes" key="reflexes">+1 Reflexes</option>,
    <option value="perception" key="perception">+1 Perception</option>,
    <option value="mind" key="mind">+1 Mind</option>
  ].filter(option => option.key !== context.characters[charId].baseCharData.minMaxAttributes.bonus);

  
  const penaltyAttributesPicker = context.characters[charId].baseCharData.minMaxAttributes.bonus 
    ? (
      <div>
        <h4 style={{textAlign: "center"}}>Penalty Attributes</h4>
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={context.characters[charId].baseCharData.minMaxAttributes.penalty[0] || ""}
          onChange={ev => changeAttributeMinMaxOptions("penalty", 0, ev)}
        >
          {penaltyAttributesOptions}
        </select>
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={context.characters[charId].baseCharData.minMaxAttributes.penalty[1] || ""}
          onChange={ev => changeAttributeMinMaxOptions("penalty", 1, ev)}
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
