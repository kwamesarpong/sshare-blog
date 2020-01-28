import React, { Component } from "react";
import { Link } from "react-router-dom";

import imgLogo from "./../../assets/placeholder-logo.png";

class Navbar extends Component {
  render() {
    const whitePage = this.props;

    return (
      <nav id="navbar" className="navbar navbar-expand-sm bg-light">
        <Link className="navbar-brand" to="/">
          {/* <img src={whitePage ? blackLogo : imgLogo } alt="logo" className="img-fluid"/> */}
          <img src={imgLogo} alt="logo" className="img-fluid" />
        </Link>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link button button__black">Contribute</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
