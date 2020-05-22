import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchAuthorFromFacebook } from "../../actions/AuthorAction";

import { ReactComponent as LogoSvgBlack } from "../../assets/LOGO/ICON/SISTAZSHARE-ICON-B.svg";
import { ReactComponent as LoginImg1 } from "../../assets/SISTAZSHARE-LOGIN-1.svg";
import Footer from "../utils/Footer";
import { FacebookProvider, LoginButton } from "react-facebook";
import Navbar from "./Navbar";

class SignUp extends Component {
  handleResponse = (data) => {
    this.props.fetchAuthorFromFacebook(data);

    this.props.history.push("/create-profile");
  };

  handleError = (error) => {
    console.log(error);
    this.setState({ error });
  };

  render() {
    // const URL = `https://www.facebook.com/v6.0/dialog/oauth?client_id=533753947579439&redirect_uri={redirect-uri}&state=123456789`

    // const URL = `https://www.facebook.com/v6.0/dialog/oauth?client_id=533753947579439&redirect_uri=http://localhost:3000/create-profile&state=123456789&scope=email`;

    // const URL = `https://www.facebook.com/v6.0/dialog/oauth?client_id=533753947579439&redirect_uri=http://localhost:3000/create-profile&state=123456789&response_type=granted_scopes&scope=email`;
    // const URL = `https://www.facebook.com/v6.0/dialog/oauth?client_id=533753947579439&redirect_uri=http://localhost:3000/create-profile&state=123456789&response_type=token&scope=email`;

    // const URL = `https://www.facebook.com/v6.0/dialog/oauth?client_id=533753947579439&redirect_uri=http://localhost:3000/create-profile&state=123456789`;

    return (
      <div>
        <Navbar whitePage={true} />
        <div className="container py-4">
          <div className="contribute2">
            <div className="container">
              <div className="contribute2__logo">
                <div className="logo__box">
                  <LogoSvgBlack className="logo logo__box--icon" alt="logo" />

                  <Link to="/">
                    <>
                      <p className="logo__box-1 logo__box-black">
                        Sistaz Share
                      </p>
                      <p className="logo__box-2 logo__box-black">
                        Connect & Learn
                      </p>
                    </>
                  </Link>
                </div>
              </div>

              <h3 className="heading heading__tertiary-2 p-5 text-center">
                Contribute your knowledge, skills & experience to empower women
              </h3>

              <div className="py-3 text-center">
                {/* <Link className="nav-link button button__black" to={URL}>
                  Sign In With Facebook
                </Link> */}
                {/* <a
                  href={URL}
                  // target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link button button__black"
                >
                  Sign In With Facebook
                </a> */}

                <FacebookProvider appId="533753947579439">
                  <LoginButton
                    scope="email"
                    onCompleted={this.handleResponse}
                    onError={this.handleError}
                    className="nav-link button button__black"
                  >
                    <span>Sign In With Facebook</span>
                  </LoginButton>
                </FacebookProvider>
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

const mapStateToProps = (state) => {
  return {
    author: state.authors,
  };
};

export default connect(mapStateToProps, { fetchAuthorFromFacebook })(SignUp);
