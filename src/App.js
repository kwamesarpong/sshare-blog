import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
// import Header from "./components/pages/Header";
import "./scss/main.scss";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contribute from "./components/pages/Contribute";
import ContributePost from "./components/pages/ContributePost";
import Articles from "./components/pages/Articles";
import Careers from "./components/pages/Careers";
import Legal from "./components/pages/Legal";
import Menu from "./components/pages/Menu";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contribute" component={Contribute} />
            <Route exact path="/contribute-post" component={ContributePost} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
