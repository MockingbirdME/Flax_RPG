import React, { useContext } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import StrainContext from "../contexts/strain";


const CharacterStrainPicker = props => {
  const charContext = useContext(CharacterContext);
  const strainContext = useContext(StrainContext);
  const {strains} = strainContext;
  const { charId } = useParams();
  
  if (!charContext.characters[charId]) return <div></div>;

  const changeName = event => {
    charContext.setCharacterStrain(charId, event.target.value);
  };
  
  const options = Object.keys(strains).length 
    ? Object.keys(strains).map(strainId => (
      <option key={strainId} value={strainId}>
        {strains[strainId].displayName}
      </option>
    ))
    : [];

  return (
    <div className="">
      <h2>
        Strain:
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={charContext.characters[charId].baseCharData.strain}
          onChange={ev => changeName(ev)}
        >
          <option disabled value="" />
          {options}
        </select>
      </h2>
    </div>
  );
};

export default CharacterStrainPicker;
