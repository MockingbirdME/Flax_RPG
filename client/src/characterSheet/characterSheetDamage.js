import React, { } from "react";
import ResourceDisplay from "./resourceDisplay";

const CharacterSheetStaminaAndWounds = props => {
  const maxStamina = (props.otherAttributes && props.otherAttributes.staminaMax) || 0;
  const fatigue = (props.otherAttributes && props.otherAttributes.fatigueCurrent) || 0;
  const currentStamina = (props.otherAttributes && props.otherAttributes.staminaCurrent) || 0;
  const currentMaxStamina = maxStamina - fatigue;
  const currentWounds = (props.otherAttributes && props.otherAttributes.woundsCurrent) || 0;
  const maxWounds = (props.otherAttributes && props.otherAttributes.woundsMax) || 1;
  
  return (
    <div className="character_sheet__body__content__outer__container">
      <div className="character_sheet__body__content__container__column" >
        <h4 style={{margin: "0 0 -1.5rem"}}>Damage</h4>
        <div className="character_sheet__body__content__container__row">
          <ResourceDisplay name="Stamina" current={currentStamina} max={currentMaxStamina} />
          <ResourceDisplay name="Fatigue" current={fatigue} />
          <ResourceDisplay name="Wounds" current={currentWounds} max={maxWounds} />
        
          <div className="character_sheet__body__group__item__levels" >
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
      </div>
    </div>
    
  );
};


export default CharacterSheetStaminaAndWounds;
