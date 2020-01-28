import React, { Component } from "react";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar whitePage={false} />
      </header>
    );
  }
}

export default Header;
