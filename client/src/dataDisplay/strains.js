import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';
import { observer, inject } from "mobx-react";

const Strains = inject("rootStore")(observer (
class Strains extends Component {
    render() {
        const data = this.props.rootStore.strainsStore.strains;
        return (
            <DataDisplay
                data={data}
                namePlural="Strains"
                nameSingular="Strain"
                rulesLink="/rules/strains"
                sortableFields={[]}
                filterableFields={[]}
                hideFilter={true}
                documentationExtension="rules/strains/"
            />
        );
    }
}));

export default Strains;
