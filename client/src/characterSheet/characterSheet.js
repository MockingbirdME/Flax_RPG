import React, { Component } from "react";
import "./characterSheet.css";

import AttributeBox from "./attributeBox.js";
import CharacterSheetHeader from "./characterSheetHeader.js";
import SkillBox from "./skillBox.js";

class CharacterSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="character_sheet__container">
        <CharacterSheetHeader />
        <div className="character_sheet__body">
          {
            // Attributes and skills.
          }
          <div className="character_sheet__body__content">
            {
              // Attributes column
            }
            <div className="character_sheet__body__group character_sheet__body__group_attributes">
              <div className="character_sheet__body__attributes">
                <AttributeBox name="body" value={1} modifier={true} />
                <AttributeBox name="reflexes" value={0} modifier={true} />
                <AttributeBox name="perception" value={0} modifier={true} />
                <AttributeBox name="mind" value={-1} modifier={true} />

                <AttributeBox name="speed" value={5} />
                <AttributeBox name="size" value={0} modifier={true} />
                <AttributeBox name="reach" value={0} modifier={true} />
              </div>
            </div>
            {
              // Defense column
            }
            <div className="character_sheet__body__group   character_sheet__body__group_wrap">
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__tracker">
                  <h5 className="character_sheet__body__resource_name">
                    Defense
                  </h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__hidden_text">
                        ____
                      </span>
                      (
                      <span className="character_sheet__hidden_text">
                        ____
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
                  <div className="character_sheet__body__group__item__levels">
                    <div className="character_sheet__body__group__item__levels__level">
                      <h6>Armor Value</h6>
                      <input type="text" />
                    </div>
                    <h5 className="character_sheet__body__resource_name_secondary">
                      Resistances:
                    </h5>
                    <div className="character_sheet__body__group__item__levels__level">
                      <h6>All Damage</h6>
                      <input type="text" />
                    </div>
                    <div className="character_sheet__body__group__item__levels__level">
                      <h6>Bludgeoning</h6>
                      <input type="text" />
                    </div>
                    <div className="character_sheet__body__group__item__levels__level">
                      <h6>Penetrating</h6>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>

              <SkillBox secondarySkillCount={2} />
              <SkillBox secondarySkillCount={2} />
            </div>
            {
              // Stamina column
            }
            <div className="character_sheet__body__group character_sheet__body__group_wrap">
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__tracker">
                  <h5 className="character_sheet__body__resource_name">
                    Stamina
                  </h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__hidden_text">
                        ___
                      </span>
                      /
                      <span className="character_sheet__hidden_text">___</span>
                      (<span className="character_sheet__hidden_text">___</span>
                      )
                    </h4>
                  </div>
                  <h5 className="character_sheet__body__resource_name character_sheet__body__resource_name_additional">
                    Initiative
                  </h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__hidden_text">____</span>
                    </h4>
                  </div>
                </div>
              </div>
              <SkillBox secondarySkillCount={3} />
              <SkillBox secondarySkillCount={2} />
              <SkillBox secondarySkillCount={2} />
            </div>
            {
              // Wounds column
            }
            <div className="character_sheet__body__group character_sheet__body__group_wrap">
              <div className="character_sheet__body__group__item">
                <div className="character_sheet__body__group__item__tracker">
                  <h5 className="character_sheet__body__resource_name">
                    Wounds
                  </h5>
                  <div className="character_sheet__body__group__item__stat">
                    <h4>
                      <span className="character_sheet__hidden_text">____</span>
                      /
                      <span className="character_sheet__hidden_text">____</span>
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

              <SkillBox secondarySkillCount={3} />
              <SkillBox secondarySkillCount={2} />
              <SkillBox secondarySkillCount={2} />
            </div>
          </div>
        </div>
        <div className="character_sheet__notes">
          <div className="paper" />
        </div>
      </div>
    );
  }
}

export default CharacterSheet;
