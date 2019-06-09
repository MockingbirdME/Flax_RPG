import React, { Component } from "react";

class CharacterSheetHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="character_sheet__header">
        <h3>Name:</h3>
      </div>
    );
  }
}

export default CharacterSheetHeader;
