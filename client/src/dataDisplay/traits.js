import React, {Component} from 'react';
import DataDisplay from './dataDisplay.js';

class Traits extends Component {
    render() {

        return (
            <DataDisplay
                namePlural="Traits"
                nameSingular="Trait"
                rulesLink="/core rules/traits"
            />
        )
    }
}

export default Traits;
