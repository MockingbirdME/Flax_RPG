import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';


import { observer, inject } from "mobx-react";

library.add(faChevronDown, faChevronUp, faChevronRight)

const App = inject("rootStore")(observer(
class App extends Component {
    state = {
        documentation: "Documentation did not load correctly.",
    };

    componentWillMount() {
        // this.props.rootStore.rulesStore.callDocumentationAPI();
    }

   //  componentDidMount() {
   //     // Call our fetch function below once the component mounts
   //     this.callDocumentationAPI()
   //     .then(res => {
   //         this.setState({ documentation: res.DOCUMENTATION });
   //         console.log(this.state.documentation);
   //     })
   //     .catch(err => console.log(err));
   // }
   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
   // callDocumentationAPI = async () => {
   //     const response = await fetch('/documentation');
   //     const body = await response.json();
   //     if (response.status !== 200) {
   //         throw Error(body.message)
   //     }
   //     return body;
   // };


    renderedDoc = () => {
        // If documentation isn't loaded, return.
        // if (typeof this.state.documentation === 'string') return;
        // Otherwise get the location.
        let location = this.props.location.pathname.toLowerCase();
        // Remove the leading '/' from the location.
        location = location.slice(1);
        // If the location has a trailing '/' remove it too.
        if (location[location.length-1] === '/') location = location.substring(0, location.length - 1);
        // If no location is provided assume a default.
        if (!location) location = 'Core Rules';

        return this.props.rootStore.rulesStore.rawDocs[location];
    }

    render() {
        console.log(this.props);
        console.log(this.props.rootStore); console.log(this.props.rootStore.rulesStore.rawDocs);
        console.log(Object.keys(this.props.rootStore.rulesStore.rawDocs));
        const test = this.props.rootStore.rulesStore.test || "";
        console.log(test);
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>test text.</p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                </header>
                <div dangerouslySetInnerHTML={{__html: this.renderedDoc()}} />
            </div>
        );
    }
}
))

export default withRouter(App);
