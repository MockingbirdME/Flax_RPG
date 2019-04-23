import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ToolButton extends Component {
    onClick = () => {
        console.log('CLicked');
    }
    render() {

        return (
            <div className="toolButton" onClick={() => this.props.onHover(this.props.title)}>
                <Link to={this.props.link}>
                    <h3>
                        {this.props.name}
                    </h3>
                </Link>
            </div>
        )
    }
}

export default ToolButton;
