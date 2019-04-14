import React, {Component} from 'react';

class ExtendedNav extends Component {
    render() {
        let hoveredClass = this.props.hoverDisplay ? "extendedNav__container" : "hidden"

        return (
            <div
                className={hoveredClass}
                onMouseOver={() => this.props.onHover(this.props.title)}
                onMouseOut={() => this.props.onHover(null)}
            >
            </div>
        )
    }
}

export default ExtendedNav;
