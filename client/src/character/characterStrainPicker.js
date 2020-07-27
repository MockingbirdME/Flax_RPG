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

  const changeStrain = event => {
    const strain = strains[event.target.value];
    charContext.setCharacterStrain(charId, event.target.value, strain.options);
  };
  
  const options = Object.keys(strains).length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- select a strain --</option>].concat(Object.keys(strains).map(strainId => (
      <option key={strainId} value={strainId}>
        {strains[strainId].displayName}
      </option>
    )))
    : [];

  const strainOptions = charContext.characters[charId].baseCharData.strain.strainOptions && charContext.characters[charId].baseCharData.strain.strainOptions.length 
    ? (
      <div style={{paddingLeft: "2rem"}}>
        {charContext.characters[charId].baseCharData.strain.strainOptions.map((option, index) => <StrainOption displayName={option.displayName} options={option.options} name={option.name} key={index}/>)}
      </div>
    ) : "";

  return (
    <div className="">
      <h2>
        Strain:
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={charContext.characters[charId].baseCharData.strain.name || ""}
          onChange={ev => changeStrain(ev)}
        >
          {options}
        </select>
      </h2>
      {strainOptions}
    </div>
  );
};

export default CharacterStrainPicker;


const StrainOption = props => {
  const charContext = useContext(CharacterContext);
  const { charId } = useParams();

  const changeStrainOption = event => {
    charContext.setCharacterStrainOption(charId, props.name, event.target.value);
  };

  const options = [<option disabled hidden style={{display: "none"}} value="" key="default">-- select an option --</option>].concat(props.options.map(option => <option value={option.value} key={option.value} >{option.displayName}</option>));

  return (
    <div className="">
      <h4>
        {props.displayName}
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={charContext.characters[charId].baseCharData.strain.options[props.name] || ""}
          onChange={ev => changeStrainOption(ev)}
        >
          {options}
        </select>
      </h4>
    </div>
  );
};
