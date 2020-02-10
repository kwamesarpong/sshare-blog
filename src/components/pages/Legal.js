import React, { Component } from "react";
import Navbar from "./Navbar";

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
            <h5 className="heading heading__tertiary-2 py-3">
              <i className="fas fa-sort-down mr-3"></i>
              Privacy
            </h5>
            <h5 className="heading heading__tertiary-2 py-3">
              <i className="fas fa-sort-down mr-3"></i>
              Terms
            </h5>
            <h5 className="heading heading__tertiary-2 py-3">
              <i className="fas fa-sort-down mr-3"></i>
              Contact
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Legal;
