import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvgBlack } from "../../assets/LOGO/ICON/SISTAZSHARE-ICON-B.svg";
import { ReactComponent as LoginImg1 } from "../../assets/SISTAZSHARE-LOGIN-1.svg";
import Footer from "../utils/Footer";

class SignUp extends Component {
  render() {
    return (
      <div>
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

              <h3 className="heading heading__tertiary-2 p-5 text-center">
                Contribute your knowledge, skills & experience to empower women
              </h3>

              <div className="py-3 text-center">
                <Link
                  className="nav-link button button__black "
                  to="/contribute"
                >
                  Sign In With Facebook
                </Link>
              </div>
              <div className="row justify-content-center">
                <div className="col-6 col-md-6 contribute2__img">
                  <LoginImg1 className="img-fluid" />
                </div>
              </div>
              {/* <LoginImg1 className="contribute2__img" />  */}

              <p className="text-muted text-center pb-5">
                By clicking “Sign In”, you agree to our{" "}
                <span className="text-dark">LEGAL</span> terms and conditions
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SignUp;