import React, { Component } from "react";

class SecondarySkillItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="character_sheet__body__group__item__levels__level character_sheet__body__secondary_skill" >
        <h6>
          <span className="character_sheet__background_text">
            Secondary
          </span>
        </h6>
        <input type="text" placeholder="Rank" />
      </div>
    );
  }
}

export default SecondarySkillItem;
