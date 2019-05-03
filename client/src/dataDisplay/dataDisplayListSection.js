import React, {Component} from 'react';
import DataDisplayListItem from './dataDisplayListItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

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
        if (field === this.state.sortBy) this.setState({sortAssending: !this.state.sortAssending});
        else this.setState({sortBy: field, sortAssending: true});
    }

    applyFilters(list) {
        return list.filter(itemKey => {
            let item = this.props.data[itemKey];
            let filterFields = this.props.filterFields;
            let filterName = this.props.filterName;
            if (filterName &&
                !item.displayName.toLowerCase().includes(filterName)) {
                    return false;
            }
            for (let field in filterFields) {
                if (!item[field] || !filterFields[field].length) continue;
                if (!item[field].some(elm => filterFields[field].includes(elm))) return false;
            }
            return true;
        })
    }

    render() {
        let list = () => {
            let data = this.props.data;
            if (!data) return "No Data Loaded.";

            let listHtml = Object.keys(data);

            listHtml = this.applyFilters(listHtml);

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
        let fields = [{name: `Name`, sort: `displayName`}].concat(this.props.fields).map(field => (<h5 key={field.name}>{field.name}<FontAwesomeIcon icon={faSort} className="sortIcon" onClick={ev => this.sortBy(field.sort)}/></h5>));

        let headerRow = (
            <div className="dataDisplay__list__table__row dataDisplay__list__header">
                {fields}
            </div>
        )

        return (
            <div className="dataDisplay__list__container">
                {headerRow}
                {list()}
            </div>
        )
    }
}

export default DataDisplayListSection;
