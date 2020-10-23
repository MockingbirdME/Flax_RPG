import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import OptionSelector from "./optionSelector";

const CharacterTraitsPicker = props => {
  const context = useContext(CharacterContext);
  const { charId } = useParams();
    
  const character = context.characters[charId];
  
  if (!character) return <div></div>;

  const changeSelectedTrait = (index, name, selectedOptions) => {
    context.setCharacterTrait(charId, index, {name, selectedOptions});
  };

  const traitEntitlements = character.traitEntitlements || {};
  
  const traitOptions = character.availableTraits.filter(trait => trait.type !== "Character Type");
  
  const hasCharacterType = character.traits.some(trait => trait.type === "Character Type");

  const allotedTraits = traitEntitlements.total.allotted || 0;
  
  const traitsDisplay = allotedTraits > 0
    ? Array.from(Array(hasCharacterType ? allotedTraits + 1 : allotedTraits))
      .map((value, index) => {
        const trait = character.traits[index] || {};
        if (trait.type === "Character Type") return null;

        const options = traitOptions.filter(traitId => !trait || trait.id !== traitId);
        if (trait.id) options.unshift(trait);

        return <OptionSelector 
          key={index}
          id={index}
          defaultSelectionType={"trait"}
          options={options}
          selectedOptions={trait.selectedOptions} 
          keyType={"trait"}
          onChange={(name, selectedOptions) => changeSelectedTrait(index, name, selectedOptions)} 
          currentValue={trait} />;
      })
      .filter(value => value)
    : "";

  return (
    <div>
      <div className="" style={{display: "flex", justifyContent: "space-between", maxWidth: "40rem"}}>
        <h2 className="character_editor_section_header" >Traits:</h2>
        <div style={{display: "flex", justifyContent: "space-around", width: "30rem", alignItems: "center"}}>
          <h4>Total: {traitEntitlements.total.consumed}/{traitEntitlements.total.allotted || 0}</h4>
          <h4>Heroic: {traitEntitlements.heroic.consumed}/{traitEntitlements.heroic.allotted || 0}</h4>
          <h4>Epic: {traitEntitlements.epic.consumed}/{traitEntitlements.epic.allotted || 0}</h4>
        </div>
      </div>
      {traitsDisplay}
    </div>
  );
};

export default CharacterTraitsPicker;
