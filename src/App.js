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
import Partnerships from "./components/pages/Partnerships";
import Team from "./components/pages/Team";
import TellAFriend from "./components/pages/TellAFriend";
import Contributors from "./components/pages/Contributors";
import Profile from "./components/pages/Profile";
import Series from "./components/pages/Series";

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
            <Route exact path="/articles/:id" component={Articles} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/partnerships" component={Partnerships} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/tell-a-friend" component={TellAFriend} />
            <Route exact path="/contributors" component={Contributors} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/series" component={Series} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
