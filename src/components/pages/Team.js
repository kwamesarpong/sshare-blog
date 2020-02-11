import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import commPerson from "../../assets/comm-person.png";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <h3 className="heading heading__secondary pb-3">Team</h3>

          <p>Sistaz Share was built, owned and managed by</p>

          <h5 className="heading heading__tertiary-2 py-3 ">
            Fixxies Inc
            <i className="fas fa-caret-right ml-3"></i>
          </h5>
        </div>

        <div className="team__officers">
          <div className="container py-5">
            <h5 className="heading heading__tertiary-2 pb-4">
              Account Officers
            </h5>
            <div className="row">
              <div className="col-md-4">
                <div className="community__card">
                  <img
                    src={commPerson}
                    alt="contributor"
                    className="community__card-img"
                  />
                  <p className="community__card-title">Amina Able </p>
                  <p className="community__card-subtitle">Ghana</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="community__card">
                  <img
                    src={commPerson}
                    alt="contributor"
                    className="community__card-img"
                  />
                  <p className="community__card-title">Amina Able </p>
                  <p className="community__card-subtitle">Ghana</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="community__card">
                  <img
                    src={commPerson}
                    alt="contributor"
                    className="community__card-img"
                  />
                  <p className="community__card-title">Amina Able </p>
                  <p className="community__card-subtitle">Ghana</p>
                </div>
              </div>
            </div>

            <hr className="my-5" />
            <p className="team__officers-want">Want in ?</p>
            <Link to="/careers" className="team__officers-link">
              Careers
              <i className="fas fa-caret-right ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
