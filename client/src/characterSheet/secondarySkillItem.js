import React, { } from "react";
import AttributeStat from "./attributeStat";

const SecondarySkillItem = props => {
  
  const nameDisplay = props.name 
    ? props.name
    : <span className="character_sheet__background_text">
      Secondary
    </span>;
  
  return (
    <div className="character_sheet__body__group__item__levels__level character_sheet__body__secondary_skill" >
      <h6>
        {nameDisplay}
      </h6>
      <AttributeStat blankSheet={props.blankSheet} stats={props} target={["rank"]} />
    </div>
  );
  
};

export default SecondarySkillItem;
