import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './dataDisplay.css';

import { observer, inject } from "mobx-react";


const DataDisplay = inject("rootStore")(observer(
class CoreRules extends Component {

    render() {
        return (
            <div className="dataDisplay__Container">

            </div>
        );
    }
}
))

export default withRouter(DataDisplay);
