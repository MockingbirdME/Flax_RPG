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
        let options = !this.props.fields ? [] : (
            this.props.fields.map((field, index) => <div key={index}><input type="checkbox" value={field} onChange={ev => this.changeFilter({field})} checked={this.shouldBeChecked(field)}/>{field}<br /></div>)
        )

        let divCount = Math.ceil(options.length / 4);
        if (divCount > 3) divCount = 3;
        let divCountLength = options.length/divCount;
        console.log(divCount);
        let optionDivs = [];
        for (let i = 0; i < divCount; i++) {
            optionDivs.push(<div key={i}>
                {options.splice(0, divCountLength)}
            </div>)
        }
        console.log(optionDivs);
        return (
            <div
                className="dataDisplay__filter__checkBox"
                style={{width: this.props.width}}
                >
                <h5>{this.props.name}</h5>
                <div className="checkmark__container">{optionDivs}</div>
            </div>
        )
    }
}

export default DataDisplayFilterField;
