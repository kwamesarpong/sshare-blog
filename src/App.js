import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
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
// import Profile from "./components/pages/Profile";
import Series from "./components/pages/Series";
import ArticlesPage from "./components/pages/ArticlesPage";
import ArticlesMenu from "./components/pages/ArticlesMenu";
import CreateProfile from "./components/pages/CreateProfile";
import Profile2 from "./components/pages/Profile2";
import SignUp from "./components/pages/SignUp";
import Contact from "./components/pages/Contact";
import PrivateRoute from "./components/utils/PrivateRoute";
import { setCurrentUser } from "./actions/AuthorAction";
import CreateProfileGuard from "./components/utils/CreateProfileGuard";

// check for token and user payload
if (localStorage.sisterShareAuth) {
  // set auth token header
  store.dispatch(setCurrentUser(localStorage.sisterShareAuth));
}

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
            <Route exact path="/articles/:category" component={ArticlesPage} />
            <Route exact path="/articles" component={ArticlesMenu} />
            {/* <Route exact path="/contributors/:id" component={Profile} /> */}
            {/* <Route exact path="/articles/:id" component={Articles} /> */}
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/legal" component={Legal} />
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/partnerships" component={Partnerships} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/tell-a-friend" component={TellAFriend} />
            <Route exact path="/contributors" component={Contributors} />
            <Route exact path="/contact" component={Contact} />

            {/* <Route exact path="/profile" component={Profile} /> */}
            {/* <Route exact path="/series" component={Series} /> */}
            <Route exact path="/signup" component={SignUp} />
            {/* <PrivateRoute
              exact
              path="/create-profile"
              component={CreateProfile}
            /> */}
            <CreateProfileGuard
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRoute exact path="/profile" component={Profile2} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
