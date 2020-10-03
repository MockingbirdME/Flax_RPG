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
      style={{fontSize: ".75rem", color: "blue", textAlign: "end", margin: "1rem 1rem -2rem", zIndex: "1", position: "sticky", top: "2.5rem"}}
      onClick={() => setDisplay(!display)} >
      {display ? "done editing" : "edit"}
    </span>
  );

  return (
    <div className="character__container">
      {
        display 
          ? (
            <div className="character__section__container" >
              <div className="inner">
                <div className="character__section__container" style={{display: "flex", justifyContent: "flex-start", minWidth: "35rem", maxWidth: "73rem", flexDirection: "column", padding: "0 2rem 0 0", borderRight: "2px solid black"}}>
                  
                  <CharacterNameField /> 
                  <CharacterLevelTracker />
                  <CharacterStrainPicker />
                  <CharacterAttributeMinMaxPicker />
                  <CharacterTypePicker />
                  <CharacterTraitsPicker />
                </div>
              </div>
            </div>
            
          ) : ""
      }
      <div className="character__section__container" >
        <div className="inner">
          <div >
            <CharacterSheet {...props} />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CreateOrEditChar;
