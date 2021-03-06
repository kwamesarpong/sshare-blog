import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvgBlack } from "../../assets/LOGO/ICON/SISTAZSHARE-ICON-B.svg";
import { ReactComponent as LoginImg1 } from "../../assets/SISTAZSHARE-LOGIN-1.svg";
import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";

import commPerson from "./../../assets/comm-person.png";

import Navbar from "./Navbar";
import SharePost from "../utils/ShareArticle";
import Golive from "../utils/GoLive";
import Footer from "../utils/Footer";
// import ProfileCard from "../utils/ProfileCard";

class ContributePost extends Component {
  render() {
    return (
      <div className="contribute__cont">
        <div className="container py-4">
          <div className="contribute2">
            <div className="container">
              <div className="contribute2__logo">
                <div className="logo__box">
                  <LogoSvgBlack className="logo logo__box--icon" alt="logo" />

                  <>
                    <p className="logo__box-1 logo__box-black">Sistaz Share</p>
                    <p className="logo__box-2 logo__box-black">
                      Connect & Learn
                    </p>
                  </>
                </div>
              </div>

              <h3 className="heading heading__secondary-2 p-5 text-center">
                Contribute your knowledge, skills & experience to empower women
              </h3>

              <div className="py-3 text-center">
                <Link
                  className="nav-link button button__black "
                  to="/contribute"
                >
                  Sign In With Google
                </Link>
              </div>
              <div className="py-3 text-center">
                <Link
                  className="nav-link button button__black "
                  to="/contribute"
                >
                  Sign In With Facebook
                </Link>
              </div>
              <div className="py-3 text-center">
                <Link
                  className="nav-link button button__black "
                  to="/contribute"
                >
                  Sign In With an Email
                </Link>
              </div>

              <LoginImg1 className="contribute2__img" />

              <p className="text-muted text-center pb-5">
                By clicking “Sign In”, you agree to our{" "}
                <span className="text-dark">LEGAL</span> terms and conditions
              </p>
            </div>
          </div>
        </div>

        <hr />
        <Navbar whitePage={true} />

        <div className="container py-5">
          <div className="contribute__cont--article">
            <a href="mailto:sistazshare@gmail.com" className="">
              Share your articles
              <span className="mt-1">
                <i className="fas fa-caret-right ml-2"></i>
              </span>
            </a>
            <p>
              Got some educational, informational or enlightening digital
              multimedia resource for women you would want us to share with us ?
            </p>
          </div>
          <div className="contribute__cont--article my-5">
            <a href="mailto:sistazshare@gmail.com" className="">
              Go live
              <span className="mt-1">
                <i className="fas fa-caret-right ml-2"></i>
              </span>
            </a>
            <p>
              Want to share your life experiences with women out there ? Or you
              want us to host you on a program and get interactive on our social
              media platforms ?
            </p>
          </div>

          {/* <ProfileCard
            commPerson={commPerson}
            name="Amina Able"
            country="Ghana"
          /> */}

          <div className="e-badge px-4 py-4">
            <div className="community__card">
              <img
                src={commPerson}
                alt="contributor"
                className="community__card-img"
              />
              <p className="community__card-title">
                Amina Able{" "}
                <span>
                  <BadgeGrey className="ml-2 contribute__cont-img" />
                </span>
              </p>
              <p className="community__card-subtitle pt-2">Ghana</p>
            </div>
            <h5 className="heading heading__tertiary-3 mt-3">
              Earn a badge <span className="ml-3">COMPLETE PROFILE</span>
            </h5>
          </div>
        </div>

        <SharePost text="Share Your Articles" />
        <Golive text="Go live" />


        <Footer />
      </div>
    );
  }
}

export default ContributePost;
