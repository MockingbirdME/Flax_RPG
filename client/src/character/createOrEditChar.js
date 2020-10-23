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
      style={{border: "1px solid blue", color: "blue", fontSize: ".75rem", padding: ".25rem"}}
      onClick={() => setDisplay(!display)} >
      {display ? "X" : "edit"}
    </span>
    
  );

  return (
    <div className="character__container" style={display ? {display: "flex"} : {}}>
      {
        display 
          ? (
            <div className="character__section__container" >
              <div className="inner">
                <div className="character__section__container" style={{display: "flex", justifyContent: "flex-start", minWidth: "35rem", maxWidth: "73rem", flexDirection: "column", padding: "0 3rem 0 0", borderRight: "2px solid black"}}>
                  <div style={{margin: "1rem -2.5rem -2rem 0", position: "sticky", top: ".5rem", textAlign: "end", zIndex: "1"}} >{displayToggle}</div>
                  <CharacterNameField /> 
                  <CharacterLevelTracker />
                  <CharacterStrainPicker />
                  <CharacterAttributeMinMaxPicker />
                  <CharacterTypePicker />
                  <CharacterTraitsPicker />
                </div>
              </div>
            </div>
            
          ) : <div style={{margin: "0rem 0rem -1rem 1rem", position: "sticky", top: "1rem"}} >{displayToggle}</div>
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
