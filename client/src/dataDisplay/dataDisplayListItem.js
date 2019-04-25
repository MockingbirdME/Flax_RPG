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
        console.log('toggling');
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        let expandedClass = this.state.expanded ? "expandedListDisplay" : "hidden";
        let plusMinus = this.state.expanded ? (faMinus) : (faPlus);
        let expandedContent = this.props.trait.description || "";
        return (
            <div>
                <li
                    className="dataDisplay__list__table__row dataDisplay__list__item">
                    <div>{this.props.trait.displayName}</div>
                    <div>{this.props.trait.type || "N/A"}</div>
                    <div>{this.props.trait.keywords}</div>
                    <div>{this.props.trait.requirementsDescription || "None"}</div>
                    <div onClick={ev => this.toggleExpanded()}><FontAwesomeIcon icon={plusMinus} /></div>
                </li>
                <div className={expandedClass}
                >
                    <p dangerouslySetInnerHTML={{__html: expandedContent}} />
                </div>
            </div>
        )
    }
}

export default DataDisplayListItem;
