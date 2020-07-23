import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavLink extends Component {
  render() {
    const link = `/${this.props.target}`;
    return (
      <li onMouseOver={() => this.props.onHover(this.props.title)}
        onMouseOut={() => this.props.onHover(null)}><Link to={link}>{this.props.title}</Link>
      </li>
    );
  }
}

export default NavLink;
