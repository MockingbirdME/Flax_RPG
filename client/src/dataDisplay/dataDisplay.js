import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './dataDisplay.css';
import DataDisplayTitleSection from './dataDisplayTitleSection.js';
import DataDisplayFilterSection from './dataDisplayFilterSection.js';
import DataDisplayListSection from './dataDisplayListSection.js';

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
                <DataDisplayListSection
                    data={this.props.data}
                />
            </div>
        );
    }
}
))

export default withRouter(DataDisplay);
