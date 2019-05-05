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
        let fieldsList = !this.props.fields ? "" : (this.props.fields.filter(item => !!item).sort());

        let options = !fieldsList ? [] : (
            fieldsList.map((field, index) => {
                return <div key={index}><input type="checkbox" value={field} onChange={ev => this.changeFilter({field})} checked={this.shouldBeChecked(field)}/>{field}<br /></div>
            })
        )
        console.log(options);

        let divCount = Math.ceil(options.length / 4);
        if (divCount > 3) divCount = 3;
        let divCountLength = Math.ceil(options.length/divCount);

        let optionDivs = [];
        for (let i = 0; i < divCount; i++) {
            optionDivs.push(<div key={i} style={{width: `calc(100% / ${divCount})`, minWidth: `fit-content`}}>
                {options.splice(0, divCountLength)}
            </div>)
        }

        let padding = (10 * divCount + 2 * divCount) / 2;
        return (
            <div
                className="dataDisplay__filter__checkBox"
                style={{width: this.props.width, minWidth: `fit-content`}}
                >
                <h5 style={{paddingLeft: `calc(50% - ${padding}rem)`}}>{this.props.name}</h5>
                <div className="checkmark__container" style={{paddingLeft: `calc(50% - ${padding}rem)`}}>{optionDivs}</div>
            </div>
        )
    }
}

export default DataDisplayFilterField;
