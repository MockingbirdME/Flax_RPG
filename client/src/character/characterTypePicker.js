import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import TraitContext from "../contexts/trait";


const CharacterTypePicker = props => {
  const charContext = useContext(CharacterContext);
  const traitContext = useContext(TraitContext);
  const {traits} = traitContext;
  console.log(traits);
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;

  const changeName = event => {
    charContext.setCharacterType(charId, event.target.value);
  };
  
  const options = Object.keys(traits).length 
    ? Object.keys(traits)
      .filter(traitId => traits[traitId].type === "Character Type")
      .map(traitId => (
        <option key={traitId} value={traitId}>
          {traits[traitId].displayName}
        </option>
      ))
    : [];

  return (
    <div className="">
      <h2>
        Character Type:
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={charContext.characters[charId].baseCharData.traitsList.find(traitId => traits[traitId].type === "Character Type") || ""}
          onChange={ev => changeName(ev)}
        >
          <option disabled value="" />
          {options}
        </select>
      </h2>
    </div>
  );
};

export default CharacterTypePicker;
