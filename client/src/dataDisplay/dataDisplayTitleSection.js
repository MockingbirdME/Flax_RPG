import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Traits extends Component {
    render() {

        return (
            <div className="dataDisplay__title__container">
                <h1 className="dataDisplay__title">{this.props.name}</h1>
                <Link to={this.props.rulesLink} className="dataDisplay__docLink">
                    <h4>{this.props.name} Rules</h4>
                </Link>
            </div>
        )
    }
}

export default Traits;
