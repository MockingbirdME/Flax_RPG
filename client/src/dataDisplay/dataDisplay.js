import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './dataDisplay.css';
import DataDisplayTitleSection from './dataDisplayTitleSection.js';

import { observer, inject } from "mobx-react";

const DataDisplay = inject("rootStore")(observer(
class CoreRules extends Component {

    render() {
        return (
            <div className="dataDisplay__container">
                <DataDisplayTitleSection
                    name={this.props.name}
                    rulesLink={this.props.rulesLink}
                />
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
