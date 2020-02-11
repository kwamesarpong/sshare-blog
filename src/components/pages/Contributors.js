import React, { Component } from "react";

import Navbar from "./Navbar";

import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";

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

            <div className="col-md-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contributors;
