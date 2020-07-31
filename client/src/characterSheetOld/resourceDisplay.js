import React, { } from "react";

const ResourceDisplay = props => {
  const {name, current, max} = props;  
  
  const currentDisplay = current
    ? <span>{current}</span>
    : <span className="character_sheet__hidden_text">____</span>;
  
  const maxDisplay = max
    ? <span>{max}</span>
    : <span className="character_sheet__hidden_text">____</span>;
  
  return (
    <div className="character_sheet__body__group__item__tracker">
      <h5 className="character_sheet__body__resource_name">
        {name}
      </h5>
      <div className="character_sheet__body__group__item__stat">
        <h4 className="character_sheet__body__group__item__stat__tracker">
          {currentDisplay}
          /
          {maxDisplay}
        </h4>
      </div>
    </div>
  );
};

export default ResourceDisplay;
