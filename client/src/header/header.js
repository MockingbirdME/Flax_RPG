import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <h1 className="header__title">Flax</h1>
            </div>
        );
    }
}

export default Header;
