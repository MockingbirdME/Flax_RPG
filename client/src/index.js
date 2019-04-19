import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

import Routes from './routes.js'
import Header from './header/header.js';
import TopNav from './topNav/topNav.js';
import App from './App';

import './index.css';


ReactDOM.render(
    <Router basename={'/'}>
        <Header />
        <TopNav />
        <Routes />
        <App />
    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
