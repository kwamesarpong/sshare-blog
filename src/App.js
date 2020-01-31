import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
// import Header from "./components/pages/Header";
import "./scss/main.scss";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
