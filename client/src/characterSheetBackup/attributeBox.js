import React, { Component } from "react";

class AttributeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {value} = this.props;

    if (this.props.modifier) {
      if (value >= 0) value = `+${value}`;
      else value = `${value}`;
    }

    return (
      <div className="character_sheet__attribute_box__container">
        <div className="character_sheet__attribute_box__title" >
          <h5>{this.props.name}</h5>
        </div>
        <div className="character_sheet__attribute_box__stat">
          <h4 className="character_sheet__background_text">value</h4>
        </div>
      </div>
    );
  }
}

export default AttributeBox;
