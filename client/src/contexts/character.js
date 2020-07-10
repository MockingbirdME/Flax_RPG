import React, {useState} from "react";
import { uuid } from "uuidv4";

const CharacterContext = React.createContext();

export default CharacterContext;

const lastCallUID = {};

export const CharacterContextProvider = props => {
  const initialBaseCharData = {
    id: null,
    name: null,
    level: 1,
    strain: {name: "", options: {}, strainOptions: []},
    traitsList: [],
    minMaxAttributes: {
      bonus: "",
      penalty: ["", ""]
    },
    baseAttributeModifiers: {
      body: 0,
      reflexes: 0,
      perception: 0,
      mind: 0,
      any: 0
    },
    characterType: {
      name: "",
      options: {
        baseSkills: [],
        expertSkills: []
      }
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
    buildCharacter(id, character);
  };
  
  const setCharacterLevel = (id, adjustment) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    character.baseCharData.level = adjustment;
    if (character.baseCharData.level < 1) character.baseCharData.level = 1;
    setCharacters({...characters, [id]: character});
    buildCharacter(id, character);
  };
  
  const setCharacterMinMaxAttributes = (id, type, index, attribute) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    
    if (type === "bonus") {
      if (!attribute) {
        if (character.baseCharData.minMaxAttributes.bonus) character.baseCharData.baseAttributeModifiers[character.baseCharData.minMaxAttributes.bonus]--;
        character.baseCharData.minMaxAttributes.penalty.map(value => {
          if (value) character.baseCharData.baseAttributeModifiers[value]++;
          return null;
        });
      }
      character.baseCharData.baseAttributeModifiers[attribute]++;
      character.baseCharData.minMaxAttributes.bonus = attribute;
    }
    else if (index) {
      if (character.baseCharData.minMaxAttributes.penalty[index]) character.baseCharData.baseAttributeModifiers[character.baseCharData.minMaxAttributes.penalty[index]]++;
      character.baseCharData.baseAttributeModifiers[attribute]--;
      character.baseCharData.minMaxAttributes.penalty[index] = attribute;
    }
    
    setCharacters({...characters, [id]: character});
    buildCharacter(id, character);
  };
  
  const setCharacterStrain = (id, strainName, strainOptions) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    character.baseCharData.strain.name = strainName;
    character.baseCharData.strain.strainOptions = strainOptions;
    
    setCharacters({...characters, [id]: character});
    buildCharacter(id, character);
  };
  
  const setCharacterStrainOption = (id, optionName, optionValue) => {
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    
    if (!optionValue) delete character.baseCharData.strain.options[optionName];
    else character.baseCharData.strain.options[optionName] = optionValue;
    
    setCharacters({...characters, [id]: character});
    buildCharacter(id, character);
  };
  
  const setCharacterType = (id, type) => {    
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    
    // Get the current index of the character's Character Type trait.
    const currentCharacterTypeIndex = character.baseCharData.traitsList.indexOf(trait => trait.type === "Character Type");
    
    // If a character trait was found remove it from the character's trait list.
    if (currentCharacterTypeIndex !== -1) character.baseCharData.traitsList.splice(currentCharacterTypeIndex, 1);

    character.baseCharData.characterType.name = type.name;
    character.baseCharData.characterType.requirements = type.options || null;
    
    setCharacters({...characters, [id]: character});
    
    if (characterTypeIsComplete(character.baseCharData.characterType)) {
      // Add the newly selected character trait as the first item in the character's trait list.
      character.baseCharData.traitsList.unshift(character.baseCharData.characterType);
      setCharacters({...characters, [id]: character});
      buildCharacter(id, character);
    }
    
  };
  
  const setCharacterTypeOption = (id, optionCatigory, index, skillName, secondarySkillIndex, secondarySkill) => {    
    if (!characters[id]) this.initializeEmptyCharacter(id);
    const character = characters[id];
    
    const traitOption = character.baseCharData.characterType.options[optionCatigory][index] 
      ? character.baseCharData.characterType.options[optionCatigory][index] 
      : {name: "", secondarySkills: []};
    
    if (skillName) traitOption.name = skillName;
    if (secondarySkillIndex || secondarySkillIndex === 0) traitOption.secondarySkills[secondarySkillIndex] = secondarySkill || "";

    character.baseCharData.characterType.options[optionCatigory][index] = traitOption;
    
    setCharacters({...characters, [id]: character});
    
    if (characterTypeIsComplete(character.baseCharData.characterType)) {
      // Add the newly selected character trait as the first item in the character's trait list.
      character.baseCharData.traitsList.unshift(character.baseCharData.characterType);
      setCharacters({...characters, [id]: character});
      buildCharacter(id, character);
    }
    
  };
  
  async function buildCharacter(id, character) {
    const callId = uuid();
    lastCallUID[id] = callId;
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(character.baseCharData)
    };
    
    const response = await fetch('/api/v1/character/build', options);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }
    if (lastCallUID[id] !== callId) console.log('Ignoring results from older API call');
    else {
      
      if (!characters[id]) this.initializeEmptyCharacter(id);
      const character = characters[id];
      
      console.log(body);
      character.calculatedStats = body;
      
      setCharacters({...characters, [id]: character});
    }
  }
  
  return <CharacterContext.Provider value={{
    characters,
    initializeEmptyCharacter,
    setCharacterName,
    setCharacterLevel,
    setCharacterMinMaxAttributes,
    setCharacterStrain,
    setCharacterStrainOption,
    setCharacterType,
    setCharacterTypeOption
  }}>{props.children}</CharacterContext.Provider>;
};

function characterTypeIsComplete(characterType) {
  const {options, requirements} = characterType;
  if (!requirements) return true;
  
  if (requirements.baseSkills) {
    if (requirements.baseSkills.count !== options.baseSkills.length) return false;
    if (!options.baseSkills.every(skill => skill.secondarySkills.length === requirements.baseSkills.secondarySkillsEach)) return false;
  }
  if (requirements.expertSkills) {
    if (requirements.expertSkills.count !== options.expertSkills.length) return false;
    if (!options.expertSkills.every(skill => skill.secondarySkills.length === requirements.expertSkills.secondarySkillsEach)) return false;
  }
  
  return true;
  
}
