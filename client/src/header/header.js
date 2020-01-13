import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="header">
                <h1 className="header__title"><Link to="/" className="header__link" >Flax</Link></h1>
            </div>
        );
    }
}

export default Header;
