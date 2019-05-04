import React, {Component} from 'react';
import DataDisplayListItem from './dataDisplayListItem.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { observer, inject } from "mobx-react";

const DataDisplayListSection = inject("rootStore")(observer (
class DataDisplayListSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: "displayName",
            sortAssending: true,
            displayDocumentation: ""
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
            let filterName = this.props.filterName.toLowerCase();
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

    renderSelected(item) {
        let extension = `${this.props.documentationExtension}${item}`;
        if (this.state.displayDocumentation === extension) this.setState({displayDocumentation: ""});
        else  this.setState({displayDocumentation: extension});

    }

    renderedDisplay() {
        console.log(this.state.displayDocumentation);
        if (this.state.displayDocumentation) return this.props.rootStore.rulesStore.rawDocs[this.state.displayDocumentation];
        else return `<p class="placeholderText">Please select an option from the left to display.</p>`;

    }
    render() {



        let list = () => {
            let data = this.props.data;
            if (!data) return "No Data Loaded.";

            let listHtml = Object.keys(data);

            listHtml = this.applyFilters(listHtml);

            listHtml.sort((a, b) => this.sorter(a, b));
            listHtml = listHtml.map(dataKey => {
               return (
                   <DataDisplayListItem
                       key={dataKey}
                       name={dataKey}
                       data={data[dataKey]}
                       fields={this.props.fields}
                       expandInPlace={this.props.fields.length > 1}
                       renderSelected={ev => this.renderSelected(ev)}
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

        let displayClass =  `dataDisplay__list__container dataDisplay__list__container__${this.props.fields.length + 2}`;

        return (
            <div className={displayClass}>

                {headerRow}
                <div className="dataDisplay__list__content__container">
                    <div>
                        {list()}
                    </div>
                    <div  dangerouslySetInnerHTML={{__html: this.renderedDisplay()}} />
                </div>
            </div>
        )
    }
}
))

export default DataDisplayListSection;
