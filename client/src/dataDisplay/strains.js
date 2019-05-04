import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';
import { observer, inject } from "mobx-react";

const Strains = inject("rootStore")(observer (
class Strains extends Component {
    render() {
        let data = this.props.rootStore.strainsStore.strains;
        return (
            <DataDisplay
                data={data}
                namePlural="Strains"
                nameSingular="Strain"
                rulesLink="/core rules/strains"
                sortableFields={[]}
                filterableFields={[]}
            />
        )
    }
}
))

export default Strains;
