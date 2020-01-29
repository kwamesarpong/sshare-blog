import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../../assets/LOGO/ICON/SISTAZSHARE-ICON-W.svg";

// import imgLogo from "./../../assets/placeholder-logo.png";

class Navbar extends Component {
  render() {
    // const whitePage = this.props;

    return (
      <nav id="navbar" className="navbar navbar-expand-sm">
        <Link className="navbar-brand mr-auto" to="/">
          <div className="logo__box">
            <LogoSvg className="logo logo__box--icon" alt="logo" />
            <p className="logo__box-1">Sistaz Share</p>
            <p className="logo__box-2">Connect & Learn</p>
          </div>
          {/* <img src={whitePage ? blackLogo : imgLogo } alt="logo" className="img-fluid"/> */}
        </Link>
        <div>
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link button button__black" to="/contribute">
                Contribute
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link button" to="/menu">
                <i class="fas fa-bars icon icon__white"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
