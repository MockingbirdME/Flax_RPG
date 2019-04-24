import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './dataDisplay.css';

import { observer, inject } from "mobx-react";

const DataDisplay = inject("rootStore")(observer(
class CoreRules extends Component {

    render() {
        return (
            <div className="dataDisplay__container">
                <div className="dataDisplay__title__container">
                    <h1 className="dataDisplay__title">{this.props.name}</h1>
                    <Link to={this.props.rulesLink} className="dataDisplay__docLink">
                        <h4>{this.props.name} Rules</h4>
                    </Link>
                </div>
                <div className="dataDisplay__filter__Container">

                </div>
                <div className="dataDisplay__list__Container">
                </div>
            </div>
        );
    }
}
))

export default withRouter(DataDisplay);
