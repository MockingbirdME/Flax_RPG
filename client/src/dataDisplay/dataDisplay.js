import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './dataDisplay.css';
import DataDisplayTitleSection from './dataDisplayTitleSection.js';
import DataDisplayFilterSection from './dataDisplayFilterSection.js';
import DataDisplayListSection from './dataDisplayListSection.js';

import { observer, inject } from "mobx-react";

const DataDisplay = inject("rootStore")(observer(
class DataDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: "",
            filterFields: {}
        };
    }

    updateFilters(data) {
        if (typeof data === "string") this.setState({filterName: data});
        else this.setState({filterFields: data});
    }

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
                    filterableFields={this.props.filterableFields}
                    data={this.props.data}
                    updateFilters={ev => this.updateFilters(ev)}
                />
                <DataDisplayListSection
                    data={this.props.data}
                    fields={this.props.sortableFields}
                    filterName={this.state.filterName}
                    filterFields={this.state.filterFields}
                    documentationExtension={this.props.documentationExtension}
                />
            </div>
        );
    }
}
))

export default withRouter(DataDisplay);
