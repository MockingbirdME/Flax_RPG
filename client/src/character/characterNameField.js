import React, { useContext, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";

let timeout = null;
const delayUpdate = (charId, name, context) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => context.setCharacterName(charId, name), 1000);
};

const CharacterNameField = props => {
  const [name, setName] = useState("");
  const context = useContext(CharacterContext);
  const { charId } = useParams();
  
  if (!context.characters[charId]) return <div></div>;
    
  const {name: characterName} = context.characters[charId];
  if (!name && characterName && characterName !== "unnamed character") setName(characterName);

  const changeName = value => {
    setName(value);
    delayUpdate(charId, value, context);
  };
  

  return (
    <div className="">
      <h2 className="character_editor_section_header">
        Name:
        <input
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          placeholder="My Character"
          value={name}
          onChange={ev => changeName(ev.target.value)}
        />
      </h2>
    </div>
  );
};

export default CharacterNameField;
