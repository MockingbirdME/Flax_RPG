import React, {Component} from 'react';
import DataDisplayListItem from './dataDisplayListItem.js';


class DataDisplayListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "displayName",
            sortAssending: true
         };
    }

    sorter(a, b) {
        let data = this.props.data;
        let fieldA = data[a][this.state.sortBy];
        if (Array.isArray(fieldA)) fieldA = fieldA.join(" ");
        let fieldB = data[b][this.state.sortBy];
        if (Array.isArray(fieldB)) fieldB = fieldB.join(" ");
        let stringA = fieldA ? fieldA.toLowerCase() : "";
        let stringB = fieldB ? fieldB.toLowerCase() : "";
        if (!this.state.sortAssending) {
            let placeholderA = stringA;
            stringA = stringB;
            stringB = placeholderA;
        }
        if (stringA < stringB) {
          return -1;
        }
        if (stringA > stringB) {
          return 1;
        }
      return 0;
    }

    sortBy(field) {
        console.log(field);
        if (field === this.state.sortBy) this.setState({sortAssending: !this.state.sortAssending});
        else this.setState({sortBy: field, sortAssending: true});
    }

    render() {
        let list = () => {
            let data = this.props.data;
            if (!data) return "No Data Loaded.";

            let listHtml = Object.keys(data);
            listHtml.sort((a, b) => this.sorter(a, b));

            listHtml = listHtml.map(traitKey => {
               return (
                   <DataDisplayListItem
                       key={traitKey}
                       trait={data[traitKey]}
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

export default DataDisplayListSection;
