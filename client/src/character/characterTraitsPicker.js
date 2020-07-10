import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";


const CharacterAttributeMinMaxPicker = props => {
  const context = useContext(CharacterContext);
  const { charId } = useParams();
  
    
  const character = context.characters[charId];
  
  if (!character || !character.calculatedStats) return <div></div>;
  console.log(character);
  const traitEntitlements = character.calculatedStats.traitEntitlements || {};


  return (
    <div className="" style={{display: "flex", justifyContent: "space-betwee", maxWidth: "40rem"}}>
      <h2>Traits:</h2>
      <div style={{display: "flex", justifyContent: "space-arround", width: "30rem", alignItems: "center"}}>
        <h4>Total: {traitEntitlements.total.consumed}/{traitEntitlements.total.allotted}</h4>
        <h4>Heroic: {traitEntitlements.heroic.consumed}/{traitEntitlements.heroic.allotted}</h4>
        <h4>Epic: {traitEntitlements.epic.consumed}/{traitEntitlements.epic.allotted}</h4>
      </div>
    </div>
  );
};

export default CharacterAttributeMinMaxPicker;
