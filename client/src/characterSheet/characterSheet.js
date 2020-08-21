import React, { useContext, useEffect } from "react";
import CharacterContext from "../contexts/character";
import "./characterSheet.css";

import Attributes from "./characterSheetAttributes";

import Defense from "./characterSheetDefense";
import Damage from "./characterSheetDamage";
import Skills from "./characterSheetSkills";
import CharacterSheetHeader from "./characterSheetHeader";
import SkillBox from "./skillBox";

const CharacterSheet = props => {
  const charContext = useContext(CharacterContext);
  const { charId } = props.match.params;

  if (charId && !charContext.characters[charId]) return <div></div>;
    
  const blankSheet = !charId;  
  const characterStats = (charContext.characters[charId] && charContext.characters[charId].calculatedStats) || {};


  return (
    <div className="character_sheet__container">
      <CharacterSheetHeader name={characterStats.name} level={characterStats.level}/>
      <div className="character_sheet__body">
        <Attributes primaryAttributes={characterStats.primaryAttributes} otherAttributes={characterStats.otherAttributes} />
        
        <div className="character_sheet__body__content">
          <Defense otherAttributes={characterStats.otherAttributes} blankSheet={blankSheet} />
          <Damage otherAttributes={characterStats.otherAttributes} />
          <Skills 
            skills={characterStats.skills}
            blankSheet={blankSheet} />
        </div>
          
      </div>
      <div className="character_sheet__notes">
        <div className="paper" />
      </div>
    </div>
  );
};
  

export default CharacterSheet;
