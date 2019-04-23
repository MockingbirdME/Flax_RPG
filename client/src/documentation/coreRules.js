import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './documentation.css';
import SideBar from './sideBar.js';

import { observer, inject } from "mobx-react";


const CoreRules = inject("rootStore")(observer(
class CoreRules extends Component {


    renderedDoc = () => {
        // Get the location without the leading '/'
        let location = this.props.location.pathname.toLowerCase().slice(1);
        // If the location has a trailing '/' remove it too.
        if (location.slice(-1) === '/') location = location.slice(0, -1);
        // Return the documentation for the processed location.
        return this.props.rootStore.rulesStore.rawDocs[location];
    }

    render() {
        return (
            <div className="coreRules__Container">
                <SideBar />
                <div className="coreRules" dangerouslySetInnerHTML={{__html: this.renderedDoc()}} />
            </div>
        );
    }
}
))

export default withRouter(CoreRules);
