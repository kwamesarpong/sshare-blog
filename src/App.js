import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/pages/Header";
import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Header} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
