import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "../utils/Footer";

class Legal extends Component {
  render() {
    return (
      <div className="legal">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <h1 className="heading heading__secondary pb-3">Legal</h1>

          <p>
            Sistaz Share is a registered social enterprise, under the PNDC Law
            with registration number BN1234567GH.
          </p>
        </div>

        <div className="legal__terms">
          <div className="container py-4">
            <h5 className="heading heading__tertiary-2 py-5">Core</h5>
            <h5 className="heading heading__tertiary-2 py-5">Volunteers</h5>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Legal;
