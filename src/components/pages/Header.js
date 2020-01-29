import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <div className="header-bg">
        <Navbar whitePage={false} />
      </div>
    );
  }
}

export default Header;
