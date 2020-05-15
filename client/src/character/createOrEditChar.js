import React, { useContext, useEffect } from "react";
import "./character.css";
import CharacterContext from "../contexts/character";
import CharacterNameField from "./characterNameField";
import CharacterLevelTracker from "./characterLevelTracker";
import CharacterStrainPicker from "./characterStrainPicker";
import CharacterTypePicker from "./characterTypePicker";

const CreateOrEditChar = props => {
  const charContext = useContext(CharacterContext);
  const { charId } = props.match.params;

  useEffect(() => {
    if (charId && !charContext.characters[charId]) charContext.initializeEmptyCharacter(charId);
    else props.history.push(`/character/createOrEdit/${charContext.initializeEmptyCharacter()}`);
  }, []);

  return (
    <div className="character__container">
      <CharacterNameField /> 
      <CharacterLevelTracker />
      <CharacterStrainPicker />
      <CharacterTypePicker />
    </div>
  );
};

export default CreateOrEditChar;
