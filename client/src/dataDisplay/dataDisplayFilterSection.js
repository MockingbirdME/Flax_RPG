import React, {Component} from 'react';
import FilterField from './dataDisplayFilterField.js';

class DataDisplayFilterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedName: "",
            filters: {}
        };
    }

    onChange(value) {
        this.setState({searchedName: value}, () => this.props.updateFilters(this.state.searchedName));
    }
    resetFilters() {
        this.setState({searchedName: ""});
    }

    getFields(field) {
        let data = this.props.data;
        let array = [];
        if (data) {
            let keys = Object.keys(data);
            keys.forEach(key => {
                if (data[key][field] && data[key][field].length) {
                    if (typeof data[key][field] === 'string') data[key][field] = [data[key][field]]

                    data[key][field].forEach(item => {
                        if (array.indexOf(item) !== -1) return;
                        array.push(item);
                    });
                }
            });
        }
        return array;
    }

    selectCheckmark(name, field) {
        let filters = this.state.filters;
        if (!filters[field]) filters[field] = [];
        if (filters[field].indexOf(name) === -1) filters[field].push(name);
        else filters[field].splice(filters[field].indexOf(name), 1);
        this.setState({filters: filters}, () => this.props.updateFilters(this.state.filters));
    }

    render() {
        let filterFields = this.props.filterableFields.map(field => {
            return (<FilterField
                    key={field.name}
                    name={field.name}
                    sort={field.sort}
                    fields={this.getFields(field.sort)}
                    selectCheckmark={ev => this.selectCheckmark(ev, field.sort)}
                 />)
        });

            return (
                <div className="dataDisplay__filter__container">
                    <div className="dataDisplay__filter__name">
                        <h5>{this.props.nameSingular} Name</h5>
                        <input
                            className="dataDisplay__filter__name__input"
                            type={"text"}
                            placeholder={"placeholder text"}
                            value={this.state.searchedName}
                            onChange={ev => this.onChange(ev.target.value)}
                            />
                        <h6
                            className="resetFilters__button"
                            onClick={ev => this.resetFilters()}
                            >
                            Reset All Filters
                        </h6>
                    </div>
                    {filterFields}

                </div>
            )
        }
    }

export default DataDisplayFilterSection;
