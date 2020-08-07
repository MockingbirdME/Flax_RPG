import React, { } from "react";
import AttributeBox from "./attributeBox";


const CharacterSheetAttributes = props => {

  return (
    <div className="character_sheet__body__attributes_container">
      <div className="character_sheet__body__attributes">
        <AttributeBox name="body" value={props.primaryAttributes && props.primaryAttributes.body} modifier={true} />
        <AttributeBox name="reflexes" value={props.primaryAttributes && props.primaryAttributes.reflexes} modifier={true} />
        <AttributeBox name="perception" value={props.primaryAttributes && props.primaryAttributes.perception} modifier={true} />
        <AttributeBox name="mind" value={props.primaryAttributes && props.primaryAttributes.mind} modifier={true} />
        <AttributeBox name="speed" value={props.otherAttributes && props.otherAttributes.speed} />
        <AttributeBox name="initiative" value={props.otherAttributes && props.otherAttributes.initiative} />
        <AttributeBox name="size" value={props.otherAttributes && props.otherAttributes.size} modifier={true} />
        <AttributeBox name="reach" value={props.otherAttributes && props.otherAttributes.reach} modifier={true} />
      </div>
    </div>
  );
};


export default CharacterSheetAttributes;
