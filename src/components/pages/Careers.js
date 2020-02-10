import React, { Component } from "react";
import Navbar from "./Navbar";

class Careers extends Component {
  render() {
    return (
      <div className="careers">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <h1 className="heading heading__secondary pb-3">Careers</h1>

          <p>
            Sistaz Share encourages everyone, especially young girls and the
            disabled with ready access to the the internet to apply to our jobs
            and internship programs from across the world. The nature of the
            work is mostly online, which allows you to work when ever from where
            ever.
          </p>
          <p>Be zesty!</p>
          <p> Build your portfolio with us now !</p>
        </div>

        <div className="careers__positions py-5">
          <div className="container">
            <h5 className="heading heading__tertiary-2 py-3">
              Account Officers
            </h5>

            <ul className="ml-4">
              <li>Review profile updates and verification processes</li>
              <li>Manage Sistaz Share profile accounts</li>
              <li>Applicant should be a little ICT savvy</li>
              <li>
                Applicant must have constant access to the internet and a
                computer
              </li>
            </ul>

            <hr className="my-3" />
            <p className="careers__positions--cv">Send us your CV</p>
            <p className="careers__positions--cv pb-5">
              careers@sistazshare.org
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Careers;
