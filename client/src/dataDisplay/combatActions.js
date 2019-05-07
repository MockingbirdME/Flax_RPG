import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';
import { observer, inject } from "mobx-react";

const CombatActions = inject("rootStore")(observer (
class CombatActions extends Component {
    render() {
        let data = this.props.rootStore.skillChecksStore.skillChecks;
        return (
            <DataDisplay
                data={data}
                namePlural="Combat Action"
                nameSingular="Combat Actions"
                rulesLink="/core rules/combat"
                sortableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}, {name: "Relevant Secondary Skills", sort: "relevantSecondarySkills"}]}
                filterableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}]}
                documentationExtension="core rules/skill checks/"
            />
        )
    }
}
))

export default CombatActions;
