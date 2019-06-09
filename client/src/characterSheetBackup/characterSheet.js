import React, { Component } from "react";
import "./characterSheet.css";

import AttributeBox from "./attributeBox.js";
import SkillBox from "./skillBox.js";

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="character_sheet__container">
        <div className="character_sheet__header">
          <h3>Name:</h3>
        </div>
        <div className="character_sheet__body">
          <div className="character_sheet__body__attributes">
            <AttributeBox name="body" value={1} modifier={true} />
            <AttributeBox name="reflexes" value={0} modifier={true} />
            <AttributeBox name="perception" value={0} modifier={true} />
            <AttributeBox name="mind" value={-1} modifier={true} />

            <AttributeBox name="speed" value={5} />
            <AttributeBox name="size" value={0} modifier={true} />
            <AttributeBox name="reach" value={0} modifier={true} />
          </div>
          <div className="character_sheet__body__content">
            <div className="character_sheet__body__group">
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__tracker">
                  <h5>Defense</h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__background_text">
                        current
                      </span>
                      (
                      <span className="character_sheet__background_text">
                        max
                      </span>
                      )
                    </h4>
                  </div>
                </div>
                <div className="character_sheet__body__group__item__levels">
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Melee Bonus</h6>
                    <input type="text" />
                  </div>
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Range Bonus</h6>
                    <input type="text" />
                  </div>
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Magic Bonus</h6>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__tracker">
                  <h5>Stamina</h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__background_text">
                        remaining
                      </span>
                      /
                      <span className="character_sheet__background_text">
                        {" "}
                        out of{" "}
                      </span>
                      (
                      <span className="character_sheet__background_text">
                        max
                      </span>
                      )
                    </h4>
                  </div>
                </div>
              </div>
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__tracker">
                  <h5>Wounds</h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__background_text">
                        remaining
                      </span>
                      /
                      <span className="character_sheet__background_text">
                        {" "}
                        max{" "}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="character_sheet__body__group__item__levels">
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

            <div className="character_sheet__body__group">
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__levels">
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Armor Value</h6>
                    <input type="text" />
                  </div>
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Resistance, All</h6>
                    <input type="text" />
                  </div>
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Resistance, Bludgeoning</h6>
                    <input type="text" />
                  </div>
                  <div className="character_sheet__body__group__item__levels__level">
                    <h6>Resistance, Penetrating</h6>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <SkillBox secondarySkillCount={3}/>
              <SkillBox secondarySkillCount={3}/>
              <SkillBox secondarySkillCount={3}/>
              <SkillBox secondarySkillCount={2}/>
              <SkillBox secondarySkillCount={2}/>
              <SkillBox secondarySkillCount={2}/>
              <SkillBox secondarySkillCount={2}/>


            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
