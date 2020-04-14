import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import { ReactComponent as MenuImg } from "../../assets/SISTAZSHARE-MENU.svg";

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <Navbar whitePage={true} />

        <div className="container py-4">
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li className="menu__links">
                //  todo => make id dymanic 
                  <Link to="/contributors/:id">Profile</Link>
                </li>
                <li className="menu__links">
                  <Link to="/contributors">Contributors</Link>
                </li>
                <li className="menu__links">
                  <Link to="/articles"> Articles</Link>
                </li>
                <li className="menu__links">
                  <Link to="/series">Series</Link>
                </li>
                <li className="menu__links">
                  <Link to="/events">Events</Link>
                </li>
                <li className="menu__links">
                  <Link to="/about">About</Link>
                </li>
              </ul>

              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search ..."
              />
              <div className="pb-3 pt-5">
                <Link to="" className="button button__black">
                  join us
                </Link>
              </div>
              <div>
                <Link to="" className="button button__black">
                  tell a friend
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <MenuImg className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
