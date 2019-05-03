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

    render() {
        let options = !this.props.fields ? [] : (
            this.props.fields.map((field, index) => <div key={index}><input type="checkbox" value={field} onClick={ev => this.changeFilter({field})} />{field}<br /></div>)
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
