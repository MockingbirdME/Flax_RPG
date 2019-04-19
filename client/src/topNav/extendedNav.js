import React, {Component} from 'react';
import ChapterList from './chapterList.js';
import RulesTools from './rulesTools.js';

class ExtendedNav extends Component {
    render() {
        console.log(this.props.hoverDisplay, this.props.hoverDisplay === this.props.title);
        let hoveredClass = this.props.hoverDisplay === this.props.title ? "extendedNav__container" : "hidden";
        hoveredClass = 'extendedNav__container'
        console.log('class:', hoveredClass);
        return (
            <div
                className={hoveredClass}
                onMouseOver={() => this.props.onHover(this.props.title)}
                onMouseOut={() => this.props.onHover(null)}
            >
                <ChapterList />
                <RulesTools />
            </div>
        )
    }
}

export default ExtendedNav;
