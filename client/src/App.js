import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header.js';
import TopNav from './topNav/topNav.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faChevronRight } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronDown, faChevronUp, faChevronRight)

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callDocumentationAPI()
        .then(res => {
            this.setState({ documentation: res.DOCUMENTATION })
        })
        .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callDocumentationAPI = async () => {
        const response = await fetch('/documentation');
        const body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (
            <div className="App">
                <Header />
                <TopNav />

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
                <p className="App-intro">{this.state.data}</p>
            </div>
        );
    }
}

export default App;
