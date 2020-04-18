import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../utils/Footer";

class Contact extends Component {
  render() {
    return (
      <div className="legal">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <h1 className="heading heading__secondary pb-3">Contact</h1>

          <p>
            Sistaz Share is a registered social enterprise, under the PNDC Law
            with registration number BN1234567GH.
          </p>
        </div>

        <div className="legal__terms">
          <div className="container py-4">
            <h4 className="heading heading__tertiary-2 py-2">Call</h4>
            <p>
              <span className="mr-3"> + 233 240 187 798</span> ●
              <span className="ml-3">+ 233 549 847 314</span>
            </p>
            <hr className="mt-4" />

            <h4 className="heading heading__tertiary-2 py-2">Email</h4>
            <Link to="">hello@sistazhare.org</Link>

            <hr className="mt-4" />

            <h4 className="heading heading__tertiary-2 py-2">Contact</h4>
            <p>
              <span className="mr-3"> Messenger </span> ●
              <span className="ml-3">Twitter Direct</span>
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
