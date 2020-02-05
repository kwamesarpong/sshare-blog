import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvgBlack } from "../../assets/LOGO/ICON/SISTAZSHARE-ICON-B.svg";
import { ReactComponent as LoginImg1 } from "../../assets/SISTAZSHARE-LOGIN-1.svg";
import Navbar from "./Navbar";

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

              <h3 className="heading heading__secondary-2 pt-5">
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

              <LoginImg1 className="img-fluid" />

              <p className="text-muted text-center pb-5">
                By clicking “Sign In”, you agree to our{" "}
                <span className="text-dark">LEGAL</span> terms and conditions
              </p>
            </div>
          </div>
        </div>

        <hr />
        <Navbar whitePage={true} />

        <div className="container">
          <div className="contribute__cont--article"></div>
        </div>
      </div>
    );
  }
}

export default ContributePost;
