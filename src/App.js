import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Header from "./components/pages/Header";
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Header} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
