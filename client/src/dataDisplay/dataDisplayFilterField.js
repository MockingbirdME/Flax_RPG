import React, {Component} from 'react';

class DataDisplayFilterField extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    changeFilter({field}) {
        this.props.selectCheckmark(field);
    }

    shouldBeChecked(field) {
        let filters = this.props.filters;
        if (!filters[this.props.sort]) return false;
        if (!filters[this.props.sort].some(elm => elm === field)) return false;
        return true;
    }

    render() {
        console.log(this.props.test);
        let options = !this.props.fields ? [] : (
            this.props.fields.map((field, index) => <div key={index}><input type="checkbox" value={field} onChange={ev => this.changeFilter({field})} checked={this.shouldBeChecked(field)}/>{field}<br /></div>)
        )

        return (
            <div className="dataDisplay__filter__checkBox">
                <h5>{this.props.name}</h5>
                {options}
            </div>
        )
    }
}

export default DataDisplayFilterField;
