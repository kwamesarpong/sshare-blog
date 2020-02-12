import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import { ReactComponent as ContributorsSvg } from "../../assets/SISTAZSHARE-CONTRIBUTE-4.svg";

import commPerson from "./../../assets/comm-person.png";
import ProfileCard from "../utils/ProfileCard";

class Contributors extends Component {
  render() {
    return (
      <div className="contributors">
        <Navbar whitePage={true} />
        <div className="container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search ..."
            className="mb-5"
          />

          <div className="row">
            <div className="col-md-3">
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
            </div>
            <div className="col-md-3">
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
            </div>
            <div className="col-md-3">
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
              <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              />
            </div>

            <div className="col-md-3">
              <ContributorsSvg className="img-fluid pb-5 ml-2" />
              <Link
                to="/careers"
                className="button button__black mb-3 ml-2 mr-5"
              >
                JOIN US
              </Link>
              <Link
                to="/careers"
                className="button button__black ml-2 mr-5 mb-5"
              >
                TELL A FRIEND
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contributors;
