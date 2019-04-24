import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import './dataDisplay.css';
import DataDisplayTitleSection from './dataDisplayTitleSection.js';
import DataDisplayFilterSection from './dataDisplayFilterSection.js';

import { observer, inject } from "mobx-react";

const DataDisplay = inject("rootStore")(observer(
class CoreRules extends Component {

    render() {
        return (
            <div className="dataDisplay__container">
                <DataDisplayTitleSection
                    name={this.props.namePlural}
                    rulesLink={this.props.rulesLink}
                />
                <DataDisplayFilterSection
                    nameSingular={this.props.nameSingular}
                    namePlural={this.props.namePlural}
                />
                <div className="dataDisplay__list__Container">
                </div>
            </div>
        );
    }
}
))

export default withRouter(DataDisplay);
