import React, {Component} from 'react';
import ToolButton from './toolButton.js';

class RulesTools extends Component {
    render() {

        return (
            <div className="rulesToolsContainer">
                <ToolButton
                    name="TEST 1"
                    link="/test1"
                />
                <ToolButton
                    name="TEST 2"
                    link="/test2"
                />
                <ToolButton
                    name="TEST 3"
                    link="/test3"
                />
                <ToolButton
                    name="TEST 4"
                    link=""
                />
            </div>
        )
    }
}

export default RulesTools;
