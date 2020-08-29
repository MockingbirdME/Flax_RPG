import React, { useContext, useState, useEffect, useRef } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";

let timeout = null;
const delayUpdate = (charId, level, context) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {console.log(level); context.setCharacterLevel(charId, level);}, 1000);
};


const CharacterLevelTacker = props => {
  const [level, setLevel] = useState(0);
  const context = useContext(CharacterContext);
  const { charId } = useParams();

  if (!context.characters[charId]) return <div></div>;
    
  const {level: characterLevel} = context.characters[charId];
  if (!level && characterLevel) setLevel(characterLevel);

  const changeLevel = value => {
    if (value < 0) return;
    setLevel(value);
    delayUpdate(charId, value, context);
  };

  return (
    <div className="">
      <h2 className="character_editor_section_header" >
        Level:
        <input
          type="number"
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          placeholder="My Character"
          value={level}
          onChange={ev => changeLevel(ev.target.value)}
        />
      </h2>
    </div>
  );
};

export default CharacterLevelTacker;
