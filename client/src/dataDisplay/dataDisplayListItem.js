import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

class DataDisplayListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false
         };
    }

    toggleExpanded = () => {
        if (this.props.expandInPlace) this.setState({expanded: !this.state.expanded});
        else this.props.renderSelected(this.props.name);
    }

    render() {
        let expandedClass = this.state.expanded ? "expandedListDisplay" : "hidden";
        let plusMinus = this.state.expanded ? (faMinus) : (faPlus);
        let expandedContent = this.props.data.description || "";
        let display = this.props.fields.map(field => {
            return (
                <div key={field.sort} >{this.props.data[field.sort]}</div>
            )
        })
        display.unshift(<div key="displayName">{this.props.data.displayName}</div>)
        return (
            <div>
                <li
                    className="dataDisplay__list__table__row dataDisplay__list__item">
                    {display}
                    <div onClick={ev => this.toggleExpanded()}><FontAwesomeIcon icon={plusMinus} /></div>
                </li>
                <div className={expandedClass}
                >
                    <div className="expandedListContent" dangerouslySetInnerHTML={{__html: expandedContent}} />
                </div>
            </div>
        )
    }
}

export default DataDisplayListItem;
