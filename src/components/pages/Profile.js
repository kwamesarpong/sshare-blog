import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";

import ProfileCard from "../utils/ProfileCard";
import commPerson from "./../../assets/comm-person.png";
import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";

class Profile extends Component {
  render() {
    return (
      <div className="contributor-profile">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <div className="row">
            <div className="col-md-9">
              <div className="contributor-profile__card">
                <img
                  src={commPerson}
                  alt="contributor"
                  className="contributor-profile__card-img"
                />
                <p className="contributor-profile__card-title">
                  Amina Able
                  <span>
                    <BadgeGrey className="ml-3 contributor-profile__card-img1" />
                  </span>
                </p>
                <p className="contributor-profile__card-subtitle pt-2">Ghana</p>
              </div>

              <h5 className="heading heading__tertiary">
                Earn a badge <span>COMPLETE PROFILE</span>
              </h5>

              <div className="contributor-profile__links pt-5">
                <Link className="mr-5">Articles</Link>
                <span className="mr-5">●</span>
                <Link className="mr-5">Live</Link>
                <span className="mr-5">●</span>
                <Link>Series</Link>
              </div>
              <Link className="log-out">Log out</Link>
            </div>
            <div className="col-md-3">
              <h5 className="heading heading__tertiary">Other Contributors</h5>

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
              {/* <ProfileCard
                commPerson={commPerson}
                name="Amina Able"
                country="Ghana"
              /> */}

              <Link
                to="/register"
                className="button button__black mb-3 ml-2 mr-5"
              >
                JOIN US
              </Link>
              <Link to="/share" className="button button__black ml-2 mr-5 mb-5">
                TELL A FRIEND
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
