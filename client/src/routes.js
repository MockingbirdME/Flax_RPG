import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import CharacterSheet from "./characterSheet/characterSheet.js";
import CoreRules from "./documentation/coreRules.js";
import SkillChecks from "./dataDisplay/skillChecks.js";
import CombatActions from "./dataDisplay/combatActions.js";
import Strains from "./dataDisplay/strains.js";
import Traits from "./dataDisplay/traits.js";

class Routes extends Component {
  render() {
    return (
      <div id="route-controller">
        <Switch>
          <Route path="/rules" component={CoreRules} />
          <Route path="/skill checks" component={SkillChecks} />
          <Route path="/combat actions" component={CombatActions} />
          <Route path="/strains" component={Strains} />
          <Route path="/traits" component={Traits} />
          <Route path="/character sheet" component={CharacterSheet} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
