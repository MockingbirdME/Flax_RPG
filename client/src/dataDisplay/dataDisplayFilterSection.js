import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class DataDisplayFilterSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchedName: ""
        };
    }

    onChange(value) {
        this.setState({searchedName: value});
    }
    resetFilters() {
        this.setState({searchedName: ""});
    }
    render() {

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
                </div>
                <div className="dataDisplay__filter__checkBox">
                    <h5>Placeholder Title</h5>
                </div>
                <div className="dataDisplay__filter__checkBox">
                    <h5>Placeholder Title</h5>
                </div>
                <div>
                    <div  className="dataDisplay__filter__button">
                        <h5>Filter {this.props.namePlural}</h5>
                    </div>
                    <h6
                    className="resetFilters__button"
                    onClick={ev => this.resetFilters()}
                    >
                    Reset All Filters
                    </h6>
                </div>
            </div>
        )
    }
}

export default DataDisplayFilterSection;
