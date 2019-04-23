import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ToolButton extends Component {
    onClick = () => {
        console.log('CLicked');
    }
    render() {

        return (
                <Link to={this.props.link} className="toolButton hoverableNav" onClick={() => this.props.onHover(this.props.title)}>
                    <h3>
                        {this.props.name}
                    </h3>
                </Link>
        )
    }
}

export default ToolButton;
