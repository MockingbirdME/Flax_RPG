import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';
import { observer, inject } from "mobx-react";

const CombatActions = inject("rootStore")(observer (
class CombatActions extends Component {
    render() {
        let data = this.props.rootStore.combatActionsStore.combatActions;
        return (
            <DataDisplay
                data={data}
                namePlural="Combat Action"
                nameSingular="Combat Actions"
                rulesLink="/core rules/combat"
                sortableFields={[{name: "Action Type", sort: "type"}, {name: "Action Point Cost", sort: "actionPointCost"}, {name: "Stamina Cost", sort: "staminaCost"}]}
                filterableFields={[{name: "Action Type", sort: "type"}]}
            />
        )
    }
}
))

export default CombatActions;
