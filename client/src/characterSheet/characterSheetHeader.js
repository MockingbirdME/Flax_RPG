import React, { } from "react";

const CharacterSheetHeader = props => {
  return (
    <div className="character_sheet__header">
      <span className="character_sheet__header__section">
        <h3 className="character_sheet__header__label">Name:</h3>
        <h4>{props.name}</h4>
      </span>
      <span className="character_sheet__header__section">
        <h3 className="character_sheet__header__label">Level:</h3>
        <h4>{props.level}</h4>
      </span>
    </div>
  );
};


export default CharacterSheetHeader;
