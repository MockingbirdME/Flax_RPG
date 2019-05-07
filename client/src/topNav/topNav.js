import React, {Component} from 'react';
import './topNav.css'
import NavLink from './navLink.js';
import ExtendedNav from './extendedNav.js'

class TopNav extends Component {
    state = {
        hovering: null,
        hoverDisplay: null
    };

    onHover = (target) => {
        this.setState({hovering: target}, () => {
            if (target) this.setHoverDisplay();
            else setTimeout(() => {this.setHoverDisplay()}, 100);
        });
    }
    setHoverDisplay = () => {
        this.setState({hoverDisplay: this.state.hovering});
    }

    render() {
        return (
            <div className="topNav" >
                <ul className="topNav__list">
                    <NavLink
                        title="Rules"
                        onHover={this.onHover}
                    />
                    <NavLink
                        title="Coming Soon"
                        onHover={this.onHover}
                     />
                </ul>
                <ExtendedNav
                    hoverDisplay={this.state.hoverDisplay}
                    onHover={this.onHover}
                    title={"Core Rules"}
                />
            </div>
        )
    }
}

export default TopNav;
