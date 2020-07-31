import React, { } from "react";

const ResourceDisplay = props => {
  const {name, current, max} = props;  
  
  const numericDisplay = isNaN(max)
    ? <div className="character_sheet__body__content__resource_tracker">
      <h4 className="">{current}</h4>
    </div>
    : <div className="character_sheet__body__content__resource_tracker">
      <h4 className="">{current}</h4>
      <h4 className="">/</h4>
      <h4 className="">{max}</h4>
    </div>;
  
  return (
    <div className="character_sheet__body__group__item__tracker" style={props.style}>
      <h5 className="character_sheet__body__resource_name">
        {name}
      </h5>
      {numericDisplay}
    </div>
  );
};

export default ResourceDisplay;
