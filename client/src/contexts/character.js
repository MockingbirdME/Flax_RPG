import React, {useState} from "react";
import { uuid } from "uuidv4";

const CharacterContext = React.createContext();

export default CharacterContext;

const lastCallUID = {};

export const CharacterContextProvider = props => {
  
  const [characters, setCharacters] = useState({});
  
  const loadCharacter = async (id) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    
    const response = await fetch(`/api/v1/character/${id}`, options);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    
    setCharacters({...characters, [id]: body});
    
    return body.id;
  };
  
  const initializeEmptyCharacter = async (id) => {
    id = await buildCharacterNew({id});
    return id;
  };
  
  const setCharacterName = (id, name) => {
    buildCharacterNew({...characters[id], name});
  };
  
  const setCharacterLevel = (id, level) => {
    buildCharacterNew({...characters[id], level});
  };
  
  const setCharacterBaseAttributeModifiers = (id, baseAttributeModifiers) => {
    buildCharacterNew({...characters[id], baseAttributeModifiers});
  };
  
  const setCharacterStrain = (id, name) => {
    buildCharacterNew({...characters[id], strain: {name}});
  };
  
  const setCharacterStrainOption = (id, optionName, optionValue) => {
    const character = characters[id];
    if (!character.strain.options) character.strain.options = {};
  
    if (!optionValue) delete character.strain.options[optionName];
    else character.strain.options[optionName] = optionValue;
    
    buildCharacterNew(character);
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

    buildCharacterNew({...character});
    
  };
  
  const setCharacterTrait = (id, index, trait) => {    
    const character = characters[id];

    character.traitsList[index] = trait;
    
    buildCharacterNew(character);
  };
  
  async function buildCharacterNew(character = {}) {
    const id = character.id || "tempId";
    const callId = uuid();
    lastCallUID[id] = callId;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character)
    };
    
    const response = await fetch('/api/v1/character/', options);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    if (lastCallUID[id] !== callId) console.log('Ignoring results from older API call');
    else {
      console.log(body);
      setCharacters({...characters, [character.id]: body});
      
      return body.id;
    }
  }
  
  return <CharacterContext.Provider value={{
    characters,
    loadCharacter,
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
