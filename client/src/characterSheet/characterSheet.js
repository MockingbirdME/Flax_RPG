import React, { useContext, useEffect } from "react";
import CharacterContext from "../contexts/character";
import "./characterSheet.css";

import AttributeBox from "./attributeBox";
import AttributeStat from "./attributeStat";
import CharacterSheetHeader from "./characterSheetHeader";
import ResourceDisplay from "./resourceDisplay";
import SkillBox from "./skillBox";

const CharacterSheet = props => {
  const charContext = useContext(CharacterContext);
  const { charId } = props.match.params;

  if (charId && !charContext.characters[charId]) return <div></div>;
    
  const blankSheet = !charId;  
  const characterStats = (charContext.characters[charId] && charContext.characters[charId].calculatedStats) || {};
  
  const resistances = characterStats.otherAttributes && characterStats.otherAttributes.resistances 
    ? (
      Object.keys(characterStats.otherAttributes.resistances).map(key => (
        <div className="character_sheet__body__group__item__levels__level">
          <h6>{key.charAt(0).toUpperCase() + key.slice(1)}</h6>
          <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "resistances", key]} />
        </div>
      ))
    )
    : (
      <span className="character_sheet__body__group__item__levels">
        <div className="character_sheet__body__group__item__levels__level">
          <h6>All Damage</h6>
          <input type="text" />
        </div>
        <div className="character_sheet__body__group__item__levels__level">
          <h6>Bludgeoning</h6>
          <input type="text" />
        </div>
        <div className="character_sheet__body__group__item__levels__level">
          <h6>Penetrating</h6>
          <input type="text" />
        </div>
      </span>
    );

  return (
    <div className="character_sheet__container">
      <CharacterSheetHeader name={characterStats.name} level={characterStats.level}/>
      <div className="character_sheet__body">
        {
          // Attributes and skills.
        }
        <div className="character_sheet__body__content">
          {
            // Attributes column
          }
          <div className="character_sheet__body__group character_sheet__body__group_attributes">
            <div className="character_sheet__body__attributes">
              <AttributeBox name="body" value={characterStats.primaryAttributes && characterStats.primaryAttributes.body} modifier={true} />
              <AttributeBox name="reflexes" value={characterStats.primaryAttributes && characterStats.primaryAttributes.reflexes} modifier={true} />
              <AttributeBox name="perception" value={characterStats.primaryAttributes && characterStats.primaryAttributes.perception} modifier={true} />
              <AttributeBox name="mind" value={characterStats.primaryAttributes && characterStats.primaryAttributes.mind} modifier={true} />

              <AttributeBox name="speed" value={characterStats.otherAttributes && characterStats.otherAttributes.speed} />
              <AttributeBox name="initiative" value={characterStats.otherAttributes && characterStats.otherAttributes.initiative} />
              <AttributeBox name="size" value={characterStats.otherAttributes && characterStats.otherAttributes.size} modifier={true} />
              <AttributeBox name="reach" value={characterStats.otherAttributes && characterStats.otherAttributes.reach} modifier={true} />
            </div>
          </div>
          {
            // Defense column
          }
          <div className="character_sheet__body__group   character_sheet__body__group_wrap">
            <div className="character_sheet__body__group__item">
              <ResourceDisplay 
                name="Defense" 
                current={characterStats.otherAttributes && characterStats.otherAttributes.defenseCurrent}
                max={characterStats.otherAttributes && characterStats.otherAttributes.defenseMax} />
              <div className="character_sheet__body__group__item__levels">
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Max Defense</h6>
                  <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "defenseMax"]} />
                </div>
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Melee Bonus</h6>
                  <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "defenseBonusMelee"]} />
                </div>
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Range Bonus</h6>
                  <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "defenseBonusRanged"]} />
                </div>
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Mental Bonus</h6>
                  <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "defenseBonusMental"]} />
                </div>
                <div className="character_sheet__body__group__item__levels">
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Armor Value</h6>
                    <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "armorValue"]} />
                  </div>
                  <h5 className="character_sheet__body__resource_name_secondary">
                    Resistances:
                  </h5>
                  {resistances}
                </div>
              </div>
            </div>

            <SkillBox secondarySkillCount={2} />
            <SkillBox secondarySkillCount={2} />
          </div>
          {
            // Stamina column
          }
          <div className="character_sheet__body__group character_sheet__body__group_wrap">
            <div className="character_sheet__body__group__item">
              <div className="character_sheet__body__group__item__tracker">
                <ResourceDisplay 
                  name="Stamina" 
                  current={characterStats.otherAttributes && characterStats.otherAttributes.staminaCurrent}
                  max={characterStats.otherAttributes && characterStats.otherAttributes.staminaMax} />
                <div className="character_sheet__body__group__item__levels">
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Max Stamina</h6>
                    <AttributeStat blankSheet={blankSheet} stats={characterStats} target={["otherAttributes", "staminaMax"]} />
                  </div>
                </div>
              </div>
            </div>
            <SkillBox secondarySkillCount={3} />
            <SkillBox secondarySkillCount={2} />
            <SkillBox secondarySkillCount={2} />
          </div>
          {
            // Wounds column
          }
          <div className="character_sheet__body__group character_sheet__body__group_wrap">
            <div className="character_sheet__body__group__item">
              <ResourceDisplay 
                name="Wounds" 
                current={characterStats.otherAttributes && characterStats.otherAttributes.woundsCurrent}
                max={characterStats.otherAttributes && characterStats.otherAttributes.woundsMax} />
              <div className="character_sheet__body__group__item__levels">
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Wounded</h6>
                  <input type="checkbox" />
                </div>
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Badly Wounded</h6>
                  <input type="checkbox" />
                </div>
                <div className="character_sheet__body__group__item__levels__level">
                  <h6>Mortaly Wounded</h6>
                  <input type="checkbox" />
                </div>
              </div>
            </div>

            <SkillBox secondarySkillCount={3} />
            <SkillBox secondarySkillCount={2} />
            <SkillBox secondarySkillCount={2} />
          </div>
        </div>
      </div>
      <div className="character_sheet__notes">
        <div className="paper" />
      </div>
    </div>
  );
};

export default CharacterSheet;
