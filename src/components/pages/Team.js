import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import commPerson from "../../assets/comm-person.png";
import Fixxies from "../../assets/FixxiesLogo-copy.png";
import Footer from "../utils/Footer";

class Team extends Component {
  render() {
    return (
      <div className="team">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <h3 className="heading heading__secondary pb-3">Team</h3>

          <p>
            Meet our leadership & management, partners & sponsors, renowned
            group of volunteers and interns working tirelessly behind the scenes
            from different parts of the world to empower women.
          </p>

          {/* <h5 className="heading heading__tertiary-2 py-3 ">
            Fixxies Inc
            <i className="fas fa-caret-right ml-3"></i>
          </h5> */}
        </div>

        <div className="team__officers">
          <div className="container py-5">
            <h5 className="heading heading__tertiary-2 pb-4">Core</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="community__card">
                  <img
                    src={Fixxies}
                    alt="Fixxies"
                    className="community__card-img"
                  />

                  <p className="community__card-title">FIXXIES </p>
                  <p className="community__card-subtitle">
                    Leadership & Management
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="community__card">
                  <img
                    src={Fixxies}
                    alt="Fixxies"
                    className="community__card-img"
                  />
                  <p className="community__card-title">MTN </p>
                  <p className="community__card-subtitle">Sponsor</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="community__card">
                  <img
                    src={Fixxies}
                    alt="Fixxies"
                    className="community__card-img"
                  />
                  <p className="community__card-title">Aveila</p>
                  <p className="community__card-subtitle">Partner</p>
                </div>
              </div>
            </div>

            <hr className="my-5" />

            <h5 className="heading heading__tertiary-2 pb-4">Volunteers</h5>

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

            <h5 className="heading heading__tertiary-2 pb-4">Interns</h5>

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

            <p className="team__officers-link">Want in ?</p>
            <p className="mb-5">
              Sistaz Share invites every individual or body interested in
              pushing their resources for women empowering at heart to join in
              from anywhere around the world. Core among our ethos is
              communalism in our endeavors - easing the pressure in harnessing
              growth and building capacities for women. We especially encourage
              young adults to participate in our internship programs. To become
              a partner, sponsor, volunteer or an intern
            </p>
            <Link to="/careers" className="team__officers-want">
              Complete This Form
              <i className="fas fa-caret-right ml-2"></i>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;
