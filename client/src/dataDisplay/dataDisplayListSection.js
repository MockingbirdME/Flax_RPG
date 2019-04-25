import React, {Component} from 'react';
import { observer, inject } from "mobx-react";
import DataDisplayListItem from './dataDisplayListItem.js';


const DataDisplayListSection = inject("rootStore")(observer(
class DataDisplayListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
         };
    }

    getTraits = () => {
        if (this.props.rootStore.traitsStore.traits) return this.props.rootStore.traitsStore.traits;
    }

    render() {
        let list = () => {
            let traits = this.getTraits();
            if (!traits) return "test";

            let listHtml = Object.keys(traits);
            listHtml = listHtml.map(traitKey => {
               return (
                   <DataDisplayListItem
                       key={traitKey}
                       trait={traits[traitKey]}
                   />
               );

           });
           return listHtml;
        }

        return (
            <div className="dataDisplay__list__container">
                <div className="dataDisplay__list__table__row dataDisplay__list__header">
                    <h5>Name</h5>
                    <h5>Type</h5>
                    <h5>Keywords</h5>
                    <h5>Requirements</h5>
                </div>
                {list()}
            </div>
        )
    }
}
))

export default DataDisplayListSection;
