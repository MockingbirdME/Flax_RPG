import React, {Component} from 'react';
import ToolButton from './toolButton.js';

class RulesTools extends Component {
    render() {

        return (
            <div className="rulesToolsContainer">
                <ToolButton
                    onHover={this.props.onHover}
                    name="Strains"
                    link="/strains"
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="Traits"
                    link="/traits"
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="Skill Checks"
                    link="/skill checks"
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="Combat Actions"
                    link=""
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="Equipment"
                    link=""
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="Arcane Powers"
                    link=""
                />
            </div>
        )
    }
}

export default RulesTools;
