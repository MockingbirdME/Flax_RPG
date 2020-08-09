import React, { useContext, useState } from "react";
import {useParams} from 'react-router-dom';
import "./character.css";
import CharacterContext from "../contexts/character";
import StrainContext from "../contexts/strain";

const CharacterStrainPicker = props => {
  const [strain, setStrain] = useState("");
  const charContext = useContext(CharacterContext);
  const strainContext = useContext(StrainContext);
  const {strains} = strainContext;
  const { charId } = useParams();
  
  
  if (!charContext.characters[charId]) return <div></div>;
    
  const {strain: {name: strainName} = {}} = charContext.characters[charId];
  if (!strain && strainName && strainName !== "unknown") setStrain(strainName);

  const changeStrain = value => {
    setStrain(value);
    charContext.setCharacterStrain(charId, value, strains[value].options);
  };
  
  const options = Object.keys(strains).length 
    ? [<option disabled hidden style={{display: "none"}} value="" key="default">-- select a strain --</option>].concat(Object.keys(strains).map(strainId => (
      <option key={strainId} value={strainId}>
        {strains[strainId].displayName}
      </option>
    )))
    : [];

  const strainOptions = strain && strains[strain] && strains[strain].options
    ? (
      <div style={{paddingLeft: "2rem"}}>
        {strains[strain].options.map((option, index) => <StrainOption displayName={option.displayName} options={option.options} name={option.name} key={index}/>)}
      </div>
    ) : "";

  return (
    <div className="">
      <h2>
        Strain:
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={strain}
          onChange={ev => changeStrain(ev.target.value)}
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
  const {strain: {options = {}} = {}} = charContext.characters[charId];

  const changeStrainOption = value => {
    charContext.setCharacterStrainOption(charId, props.name, value);
  };

  const selectionOptions = [<option disabled hidden style={{display: "none"}} value="" key="default">-- select an option --</option>].concat(props.options.map(option => <option value={option.value} key={option.value} >{option.displayName}</option>));

  return (
    <div className="">
      <h4>
        {props.displayName}
        <select
          style={{ marginLeft: "1rem", fontSize: "1.5rem" }}
          value={options[props.name] || ""}
          onChange={ev => changeStrainOption(ev.target.value)}
        >
          {selectionOptions}
        </select>
      </h4>
    </div>
  );
};
