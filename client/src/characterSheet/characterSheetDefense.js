import React, { } from "react";
import AttributeStat from "./attributeStat";
import ResourceDisplay from "./resourceDisplay";


const CharacterSheetDefense = props => {    
  const currentDefense = (props.otherAttributes && props.otherAttributes.defenseCurrent) || 0;
  const maxDefense = (props.otherAttributes && props.otherAttributes.defenseMax) || 1;

  return (
    <div className="character_sheet__body__content__outer__container">
      <div className="character_sheet__body__content__container__column" >
        <div className="character_sheet__body__content__container__row">
          <ResourceDisplay 
            name="Defense" 
            current={currentDefense}
            max={maxDefense} style={{minWidth: "7rem"}}/>
          
          <div className="character_sheet__body__group__item__levels" >
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Melee Bonus</h6>
              <AttributeStat blankSheet={props.blankSheet} stats={props.otherAttributes} target={["defenseBonusMelee"]} />
            </div>
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Range Bonus</h6>
              <AttributeStat blankSheet={props.blankSheet} stats={props.otherAttributes} target={["defenseBonusRanged"]} />
            </div>
          </div>
          <div className="character_sheet__body__group__item__levels">
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Mental Bonus</h6>
              <AttributeStat blankSheet={props.blankSheet} stats={props.otherAttributes} target={["defenseBonusMental"]} />
            </div>
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Armor Value</h6>
              <AttributeStat blankSheet={props.blankSheet} stats={props.otherAttributes} target={["armorValue"]} />
            </div>
          </div>  
        </div>
      </div>
    </div>
    
  );
};


export default CharacterSheetDefense;
