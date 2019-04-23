import React, {Component} from 'react';
import ChapterList from './chapterList.js';
import RulesTools from './rulesTools.js';

class ExtendedNav extends Component {
    render() {
        let hoveredClass = this.props.hoverDisplay === this.props.title ? "extendedNav__container" : "hidden";

        return (
            <div
                className={hoveredClass}
                onMouseOver={() => this.props.onHover(this.props.title)}
                onMouseOut={() => this.props.onHover(null)}
            >
                <div className="extendedNav__items__container">
                    <ChapterList />
                    <RulesTools />
                </div>

            </div>
        )
    }
}

export default ExtendedNav;
