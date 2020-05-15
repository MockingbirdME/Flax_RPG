import React, {useState} from "react";

const CharacterContext = React.createContext();

export default CharacterContext;

export const CharacterContextProvider = props => {
  const initialBaseCharData = {
    id: null,
    name: null,
    level: 1,
    strain: "",
    traitsList: [],
    baseAttributeModifiers: {
      body: 0,
      reflexes: 0,
      perception: 0,
      mind: 0,
      any: 0
    }
  };
  
  const [characters, setCharacters] = useState({});
  
  const initializeEmptyCharacter = (id) => {
    const tempID = id || Object.keys(characters).length;
    const newCharacter = {
      baseCharData: { ...initialBaseCharData },
      constructedCharData: {}
    };
    setCharacters({...characters, [tempID]: newCharacter});
    return tempID;
  };
  
  const setCharacterName = (id, name) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    character.baseCharData.name = name;
    setCharacters({...characters, [id]: character});
  };
  
  const setCharacterLevel = (id, adjustment) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    character.baseCharData.level = adjustment;
    if (character.baseCharData.level < 1) character.baseCharData.level = 1;
    setCharacters({...characters, [id]: character});
  };
  
  const setCharacterStrain = (id, strain) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    character.baseCharData.strain = strain;
    setCharacters({...characters, [id]: character});
  };
  
  return <CharacterContext.Provider value={{
    characters,
    initializeEmptyCharacter,
    setCharacterName,
    setCharacterLevel,
    setCharacterStrain
  }}>{props.children}</CharacterContext.Provider>;
};
