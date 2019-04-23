import React, {Component} from 'react';
import ToolButton from './toolButton.js';

class RulesTools extends Component {
    render() {

        return (
            <div className="rulesToolsContainer">
                <ToolButton
                    onHover={this.props.onHover}
                    name="TEST 1"
                    link="/test1"
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="TEST 2"
                    link="/test2"
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="TEST 3"
                    link="/test3"
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="TEST 4"
                    link=""
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="TEST 4"
                    link=""
                />
                <ToolButton
                    onHover={this.props.onHover}
                    name="TEST 4"
                    link=""
                />
            </div>
        )
    }
}

export default RulesTools;
