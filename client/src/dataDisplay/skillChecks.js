import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';
import { observer, inject } from "mobx-react";

const SkillChecks = inject("rootStore")(observer (
class SkillChecks extends Component {
    render() {
        let data = this.props.rootStore.skillChecksStore.skillChecks;
        return (
            <DataDisplay
                data={data}
                namePlural="Skill Checks"
                nameSingular="Skill Check"
                rulesLink="/rules/skill checks"
                sortableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}, {name: "Relevant Secondary Skills", sort: "relevantSecondarySkills"}]}
                filterableFields={[{name: "Primary Attribute", sort: "primaryAttribute"}, {name: "Primary Skill", sort: "primarySkill"}]}
                documentationExtension="rules/skill checks/"
            />
        )
    }
}
))

export default SkillChecks;
