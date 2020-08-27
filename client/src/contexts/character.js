import React, {useState} from "react";
import { uuid } from "uuidv4";

const CharacterContext = React.createContext();

export default CharacterContext;

const lastCallUID = {};

export const CharacterContextProvider = props => {
  
  const [characters, setCharacters] = useState({});
  
  const initializeEmptyCharacter = (id) => {
    const tempID = id || Object.keys(characters).length;
    // setCharacters({...characters, [tempID]: {}});
    buildCharacterNew(tempID);
  };
  
  const setCharacterName = (id, name) => {
    buildCharacterNew(id, {...characters[id], name});
  };
  
  const setCharacterLevel = (id, level) => {
    buildCharacterNew(id, {...characters[id], level});
  };
  
  const setCharacterBaseAttributeModifiers = (id, baseAttributeModifiers) => {
    buildCharacterNew(id, {...characters[id], baseAttributeModifiers});
  };
  
  const setCharacterStrain = (id, name) => {
    buildCharacterNew(id, {...characters[id], strain: {name}});
  };
  
  const setCharacterStrainOption = (id, optionName, optionValue) => {
    const character = characters[id];
    if (!character.strain.options) character.strain.options = {};
  
    if (!optionValue) delete character.strain.options[optionName];
    else character.strain.options[optionName] = optionValue;
    
    buildCharacterNew(id, character);
  };
  
  const setCharacterType = (id, type) => {
    const character = characters[id];

    if (!character.traitsList) character.traitsList = [];
    
    // Check all traits for Character Type Traits and remove them from the Traits List.
    character.traits.forEach(trait => {
      if (trait.type !== "Character Type") return;

      const traitsListIndex = character.traitsList.findIndex(listedTrait => listedTrait.name === trait.id);

      if (traitsListIndex !== -1) character.traitsList.splice(traitsListIndex, 1);
    });

    character.traitsList.unshift(type);

    buildCharacterNew(id, {...character});
    
  };
  
  const setCharacterTrait = (id, index, trait) => {    
    const character = characters[id];

    character.traitsList[index] = trait;
    
    buildCharacterNew(id, character);
  };
  
  async function buildCharacterNew(id, character = {}) {
    const callId = uuid();
    lastCallUID[id] = callId;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    };
    
    const response = await fetch('/api/v1/character/build', options);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    if (lastCallUID[id] !== callId) console.log('Ignoring results from older API call');
    else {
      console.log(body);
      setCharacters({...characters, [id]: body});
    }
  }
  
  return <CharacterContext.Provider value={{
    characters,
    initializeEmptyCharacter,
    setCharacterName,
    setCharacterLevel,
    setCharacterBaseAttributeModifiers,
    setCharacterStrain,
    setCharacterStrainOption,
    setCharacterType,
    setCharacterTrait
  }}>{props.children}</CharacterContext.Provider>;
};
