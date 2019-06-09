import React, { Component } from "react";

import SecondarySkillItem from './secondarySkillItem.js';

class SkillBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const secondarySkillsDiv = [];
    for (let index = 0; index < this.props.secondarySkillCount; index++) {
      secondarySkillsDiv.push(<SecondarySkillItem key={index} />);
    }

    return (
      <div className="character_sheet__body__group__item">
        <div className="character_sheet__body__group__item__levels">
          <div className="character_sheet__body__group__item__levels__level character_sheet__body__primary_skill">
            <h5>
              <span className="character_sheet__background_text">
                Skill Name
              </span>
            </h5>
            <input type="text" placeholder="Rank" />
          </div>
          {secondarySkillsDiv}
        </div>
      </div>
    );
  }
}

export default SkillBox;
