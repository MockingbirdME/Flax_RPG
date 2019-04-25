import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';
import { observer, inject } from "mobx-react";

const Traits = inject("rootStore")(observer (
class Traits extends Component {
    render() {
        let data = this.props.rootStore.traitsStore.traits;
        return (
            <DataDisplay
                data={data}
                namePlural="Traits"
                nameSingular="Trait"
                rulesLink="/core rules/traits"
            />
        )
    }
}
))

export default Traits;
