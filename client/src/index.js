import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let tests = () => {return <h1>TEST TEST TEST</h1>};

    ReactDOM.render(
        <Router basename={'/'}>
            <App />
            <Route path='/test' component={tests} />
        </Router>,
        document.getElementById('root')
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
