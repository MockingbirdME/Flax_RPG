import React, { useContext, useEffect } from "react";
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
  const charContext = useContext(CharacterContext);
  const { charId } = props.match.params;

  useEffect(() => {
    if (charId && !charContext.characters[charId]) charContext.initializeEmptyCharacter(charId);
    else props.history.push(`/character/createOrEdit/${charContext.initializeEmptyCharacter()}`);
  }, []);

  return (
    <div className="character__container">
      <div style={{display: "flex", justifyContent: "flex-start", maxWidth: "73rem", flexDirection: "column"}}>
        <CharacterNameField /> 
        <CharacterLevelTracker />
        <CharacterStrainPicker />
        <CharacterAttributeMinMaxPicker />
        <CharacterTypePicker />
        <CharacterTraitsPicker />
      </div>
      <div style={{padding: "0 0 0 2rem", borderLeft: "2px solid black"}}>
        <CharacterSheet {...props} />
      </div>
    </div>
  );
};

export default CreateOrEditChar;
