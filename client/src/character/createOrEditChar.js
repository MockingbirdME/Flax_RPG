import React, { useContext, useEffect, useState } from "react";
import "./character.css";
import CharacterContext from "../contexts/character";
import CharacterNameField from "./characterNameField";
import CharacterLevelTracker from "./characterLevelTracker";
import CharacterStrainPicker from "./characterStrainPicker";
import CharacterAttributeMinMaxPicker from "./characterAttributeMinMaxPicker";
import CharacterTypePicker from "./characterTypePicker";
import CharacterTraitsPicker from "./characterTraitsPicker";
import CharacterSheet from "../characterSheet/characterSheet";

const CreateOrEditChar = props => {
  const [display, setDisplay] = useState(true);
  const charContext = useContext(CharacterContext);
  const { charId } = props.match.params;

  useEffect(() => {
    async function loadCharacter(id) {
      await charContext.loadCharacter(charId);
    }
    
    async function makeNewCharAndNavigateToId () {
      const newCharId = await charContext.initializeEmptyCharacter();
      props.history.push(`/character/createOrEdit/${newCharId}`);
    }
    if (!charId) makeNewCharAndNavigateToId();
    else if (!charContext.characters[charId]) loadCharacter(charId);
  }, [charId]);
  
  const displayToggle = (
    <span 
      style={{fontSize: ".75rem", marginLeft: "14rem", color: "blue", textAlign: "end", margin: "1rem 1rem -2rem", zIndex: "1"}}
      onClick={() => setDisplay(!display)} >
      {display ? "done editing" : "edit"}
    </span>
  );

  return (
    <div className="character__container">
      {display ? "" : displayToggle}
      {
        display 
          ? (
            <div style={{display: "flex", justifyContent: "flex-start", minWidth: "35rem", maxWidth: "73rem", flexDirection: "column"}}>
              
              {displayToggle}
              <CharacterNameField /> 
              <CharacterLevelTracker />
              <CharacterStrainPicker />
              <CharacterAttributeMinMaxPicker />
              <CharacterTypePicker />
              <CharacterTraitsPicker />
            </div>
          ) : ""
      }
      
      <div style={ display ? {padding: "0 0 0 2rem", borderLeft: "2px solid black"} : {}}>
        <CharacterSheet {...props} />
      </div>
    </div>
  );
};

export default CreateOrEditChar;
