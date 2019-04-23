import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CoreRules from "./documentation/coreRules.js";
import Traits from "./dataDisplay/traits.js";

class Routes extends Component {
    render() {
        return(
            <div id="route-controller" >
                <Switch>
                    <Route path="/core rules" component={CoreRules} />
                    <Route path="/traits" component={Traits} />
                </Switch>
            </div>
        )
    }
}

export default Routes;
