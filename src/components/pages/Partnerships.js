import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../utils/Footer";

class Partnerships extends Component {
  render() {
    return (
      <div className="partnerships">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <h1 className="heading heading__secondary pb-3">Partnerships</h1>

          <p>
            Sistaz Share LLC is open to all individuals, startups, companies,
            venture capitalist, international organizations and governments who
            find our activities relevant to their outlooks of engagement.
          </p>

          <h5 className="heading heading__tertiary-2 py-3 ">
            Fixxies | Sistaz Share
            <i className="fas fa-caret-right ml-3"></i>
          </h5>
        </div>

        <div className="partnerships__partners">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <h5 className="heading heading__secondary py-3 ">
                  <i className="fab fa-facebook-square  mr-3"></i>
                  Facebook
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="heading heading__secondary py-3 ">
                  <i className="fab fa-microsoft mr-3"></i>
                  Microsoft
                </h5>
              </div>
              <div className="col-md-4">
                <h5 className="heading heading__secondary py-3 ">
                  <i className="fab fa-github mr-3"></i>
                  Github
                </h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Partnerships;
