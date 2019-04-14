import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavLink extends Component {
    render() {
        let link = `/${this.props.title}`;
        let title = this.props.title.split("_").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        return (
            <li onMouseOver={() => this.props.onHover(title)}
              onMouseOut={() => this.props.onHover(null)}><a href={link}>{title}</a>
              <FontAwesomeIcon icon="chevron-down" />
            </li>
        )
    }
}

export default NavLink;
