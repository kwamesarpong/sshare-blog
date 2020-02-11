import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import { ReactComponent as InviteImg } from "../../assets/SISTAZSHARE-INVITE.svg";

class TellAFriend extends Component {
  render() {
    return (
      <div className="friend">
        <Navbar whitePage={true} />

        <div className="container">
          <h3 className="heading heading__secondary mb-5 mt-4">
            Tell A Friend ...
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div className="friend__left">
                <div className="container">
                  <h5 className="heading heading__tertiary-2  pt-5 ">
                    Share our link to your friends on
                  </h5>

                  <div className="pb-4 icons">
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-square mr-3 icons icons__facebook"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter-square mr-3 icons icons__twitter"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin mr-3 icons icons__linkedin"></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-whatsapp-square mr-3 icons  icons__whatsapp"></i>{" "}
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-link mr-3 icons icons__link"></i>{" "}
                    </a>
                  </div>

                  <p className="mb-0">
                    Who wouldn’t be excited about empowering women ?
                  </p>
                  <p className="pb-2">
                    Spread the word and become an active part of the Sistaz
                    Share revolution today !
                  </p>

                  <h5 className="heading heading__tertiary pb-3">
                    Become A Content Distributor
                  </h5>

                  <form>
                    <div className="form-group">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="WhatsApp Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        class="form-control "
                        placeholder="Email"
                      />
                    </div>

                    <div className="pb-5 pt-2 mar-left">
                      <Link to="/careers" className="button button__black">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <InviteImg className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TellAFriend;
