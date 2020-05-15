import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Routes from "./routes.js";
import Header from "./header/header.js";
import TopNav from "./topNav/topNav.js";

import { Provider } from "mobx-react";
import rootStore from "./stores/rootStore.js";

import "./index.css";

ReactDOM.render(
  <Provider rootStore={rootStore}>
    <Router basename={"/"}>
      <Header />
      <TopNav />
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
