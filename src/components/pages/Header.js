import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar whitePage={false} />

        <div className="container header__text">
          <h4>#sistazshare#series</h4>
          <h1>pms</h1>
        </div>
      </div>
    );
  }
}

export default Header;
