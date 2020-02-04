import React, { Component } from "react";
import Navbar from "./Navbar";

import peopleFlowerImg from "../../assets/contribute-flower.jpg";

import { ReactComponent as Test } from "../../assets/SISTAZSHARE-CONTRIBUTE.svg";

class Contribute extends Component {
  render() {
    return (
      <div className="contribute">
        <Navbar whitePage={true} />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* // svg image  */}
              <Test className="img-fluid" />

              {/* jpg image  */}
              {/* <img
                src={peopleFlowerImg}
                alt="people Flower"
                className="img-fluid"
              /> */}
            </div>
            <div className="col-md-6 align-self-end">
              <div className="contribute__header">
                <h3 className="heading heading__secondary-2 p-4">
                  Empower women, digitally ...
                </h3>

                <p className="p-4">
                  Sistaz Share invites you to enlighten millions of young girls
                  & women around the world with your knowledge, skills and life
                  experiences. We’re open to all women and men passionate about
                  sharing their insightful resources aimed to yield deeper
                  perspectives and revealing facts for women folk, to the world.
                </p>
              </div>
              {/* <div className="vertical-left">
                <span>&nbsp;</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contribute;
