import React, { } from "react";
import ResourceDisplay from "./resourceDisplay";
import AttributeStat from "./attributeStat";


const CharacterSheetStaminaAndWounds = props => {
  const maxStamina = (props.otherAttributes && props.otherAttributes.staminaMax) || 0;
  const fatigue = (props.otherAttributes && props.otherAttributes.fatigueCurrent) || 0;
  const currentStamina = (props.otherAttributes && props.otherAttributes.staminaCurrent) || 0;
  const currentMaxStamina = maxStamina - fatigue;
  const currentWounds = (props.otherAttributes && props.otherAttributes.woundsCurrent) || 0;
  const maxWounds = (props.otherAttributes && props.otherAttributes.woundsMax) || 1;

  const resistancesList = Object.keys(props.otherAttributes.resistances);
  
  const resistances = (
    <div className="" style={{flexGrow: 1}} >
      <h5 className="character_sheet__body__resource_name">
        Resistances:
      </h5>
      <div className="character_sheet__body__content__container__row character_sheet__body__group_wrap">
        {resistancesList.map(key => (
          <div className="character_sheet__body__content__container__row character_sheet__body__group__item__levels__level character_sheet__damage_resistance_item" style={resistancesList.length > 3 ? {width: "8rem"} : {width: "10rem"}} key={key}>
            <h6>{key.charAt(0).toUpperCase() + key.slice(1)}</h6>
            <AttributeStat style={resistancesList.length > 3 ? {width: "1.5rem"} : {width: "2.5rem"}} blankSheet={props.blankSheet} stats={props.otherAttributes} target={["resistances", key]} />
          </div>
        ))}
      </div>
      
    </div>
  );
  
  return (
    <div className="character_sheet__body__content__outer__container">
      <div className="character_sheet__body__content__container__row">
        <div className="character_sheet__body__content__container__row">
          <div className="character_sheet__body__group__item__levels character_sheet__damage_resource_container">
            <ResourceDisplay name="Stamina" current={currentStamina} max={currentMaxStamina} />
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Wounded</h6>
              <input type="checkbox" />
            </div>
          </div>
          <div className="character_sheet__body__group__item__levels character_sheet__damage_resource_container">
            <ResourceDisplay name="Fatigue" current={fatigue} />
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Badly Wounded</h6>
              <input type="checkbox" />
            </div>
          </div>
          <div className="character_sheet__body__group__item__levels character_sheet__damage_resource_container">
            <ResourceDisplay name="Wounds" current={currentWounds} max={maxWounds} />
            <div className="character_sheet__body__group__item__levels__level">
              <h6>Mortaly Wounded</h6>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        {resistances}
      </div>
    </div>
    
  );
};


export default CharacterSheetStaminaAndWounds;
