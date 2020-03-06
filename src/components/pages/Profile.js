import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Radio } from "pretty-checkbox-react";

import Navbar from "./Navbar";

import ProfileCard from "../utils/ProfileCard";
import commPerson from "./../../assets/comm-person.png";
import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";
import Input from "../utils/Input";
import RadioBtn from "../utils/RadioBtn";

class Profile extends Component {
  render() {
    console.log(this.props.author);

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
                Earn a badge <span className="ml-3">COMPLETE PROFILE</span>
              </h5>

              <div className="contributor-profile__links py-5">
                <Link className="contributor-profile__mr">Articles</Link>
                <span className="contributor-profile__mr">●</span>
                <Link className="contributor-profile__mr">Live</Link>
                <span className="contributor-profile__mr">●</span>
                <Link className="">Series</Link>
              </div>
              <Link className="text-danger">Log out</Link>
              <hr />
            </div>
            <div className="col-md-3">
              <h5 className="heading heading__tertiary pt-5 pb-3">
                Other Contributors
              </h5>

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
              <div>
                <Link
                  to="/register"
                  className="button button__black mt-5 mb-3 ml-5 mr-5"
                >
                  JOIN US
                </Link>
                <Link
                  to="/share"
                  className="button button__black ml-5 mr-5 mb-5"
                >
                  TELL A FRIEND
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <Navbar whitePage={true} />

        <div className="container pt-5 pb-2">
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
        </div>

        <div className="contributor-profile__bio">
          <form className="py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <Input type="text" name="bio" label="Bio" />
                  <Input
                    type="text"
                    name="skills"
                    label="Skills & Occupation"
                  />
                  <Input
                    type="text"
                    name="why"
                    label="Why women’s empowerment"
                  />
                  <Input
                    type="text"
                    name="reviews"
                    label="Reviews on Sistaz Share"
                  />
                  <Input
                    type="url"
                    name="url"
                    label="Website or a preferred social media URL"
                  />
                </div>

                <div className="col-md-6">
                  <>
                    <label className="pt-5">
                      Have you been previously involved in women’s empowerment
                      activities ?
                    </label>
                    <RadioBtn name="yes" label="Yes" radioName="involveYes" />
                    <RadioBtn name="no" label="No" radioName="involveYes" />
                  </>
                  <>
                    <label className="pt-4">
                      Are you a celebrity or verified on other social media
                      platforms
                    </label>
                    <RadioBtn name="yes" label="Yes" radioName="involveYes" />
                    <RadioBtn name="no" label="No" radioName="involveYes" />
                  </>

                  <Input type="email" name="email" label="Email" />
                  <Input type="number" name="telephone" label="Telephone" />
                </div>

                {/* <div className="col-md-4"></div> */}
              </div>
              <div className="py-3 text-center contributor-profile__disclaimer">
                <small>
                  Information you share here is live on your Sistaz Share
                  profile for the world to see. This in addition to your
                  contributions to the platform and audience review will
                  guarantee you earning a verification badge.
                </small>
                <div>
                  <Link to="/share" className="button button__black my-5">
                    save
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;
