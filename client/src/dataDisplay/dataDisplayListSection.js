import React, {Component} from 'react';
import { observer, inject } from "mobx-react";

const DataDisplayListSection = inject("rootStore")(observer(
class DataDisplayListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            traits: null
         };
    }

    getTraits = () => {
        if (this.props.rootStore.traitsStore.traits) return this.props.rootStore.traitsStore.traits;
    }

    componentWillMount() {
        console.log(this.props);
        if (this.props.rootStore.traitsStore&& this.props.rootStore.traitsStore.traits) this.setState({traits: this.props.rootStore.traitsStore.traits});
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }




    render() {
        let list = () => {
            let test = this.getTraits();
            if (!test) return "test";

            let listHtml = Object.keys(test);
            listHtml = listHtml.map(traitKey => {
               let trait = test[traitKey];
               return (
                   <li key={traitKey}
                       className="dataDisplay__list__table__row">
                       <div>{trait.displayName}</div>
                       <div>{trait.type}</div>
                       <div>{trait.keywords}</div>
                       <div>{trait.requirementsDescription}</div>
                   </li>
               );

           });
           return listHtml;
        }

        return (
            <div className="dataDisplay__list__container">
                <div className="dataDisplay__list__table__header">
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
