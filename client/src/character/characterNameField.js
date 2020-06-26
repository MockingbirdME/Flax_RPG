import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";


const CharacterNameField = props => {
  const context = useContext(CharacterContext);
  const { charId } = useParams();

  if (!context.characters[charId]) return <div></div>;

  const changeName = event => {
    context.setCharacterName(charId, event.target.value);
  };

  return (
    <div className="">
      <h2>
        Character Name:
        <input
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          placeholder="My Character"
          value={context.characters[charId].baseCharData.name || ""}
          onChange={ev => changeName(ev)}
        />
      </h2>
    </div>
  );
};

export default CharacterNameField;
