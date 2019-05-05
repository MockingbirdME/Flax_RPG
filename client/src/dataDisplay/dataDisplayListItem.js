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
        this.props.renderSelected(this.props.name);
    }

    render() {
        let expandedClass = this.state.expanded ? "expandedListDisplay" : "hidden";
        let plusMinus = this.state.expanded ? (faMinus) : (faPlus);
        let expandedContent = this.props.renderedContent ? this.props.renderedContent : this.props.data.description || "";
        let display = this.props.fields.map(field => {
            let displayString = this.props.data[field.sort];
            if (Array.isArray(displayString)) displayString = displayString.join(" or ");
            return (
                <div key={field.sort} >{displayString}</div>
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
