import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../utils/Input";
import Navbar from "./Navbar";
import { ReactComponent as BadgeGreyGreen } from "../../assets/SISTAZSHARE-BADGE.svg";

class CreateProfile extends Component {
  render() {
    return (
      <div>
        <Navbar whitePage={true} />
        <div className="container">
          <h2 className="my-5 heading heading__primary">Profile</h2>
        </div>
        <div className="contributor-profile__bio py-4">
          <form className="py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4 px-4">
                  <div class="custom-file mb-3 mar-top-2">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                    />
                    <label class="custom-file-label" for="customFile">
                      Upload Profile Picture
                    </label>
                  </div>
                  <Input type="text" name="nationality" label="Nationality" />
                  <Input type="text" name="bio" label="Bio" />

                  <Input
                    type="url"
                    name="url"
                    label="Website or a preferred social media URL"
                  />
                </div>

                <div className="col-md-4 px-4">
                  <Input
                    type="number"
                    name="telephone"
                    label="WhatsApp Number *"
                  />
                  <Input type="email" name="email" label="Email *" />
                  <p className="mt-5">
                    * Information provided here will not be shared with the
                    public.
                  </p>

                  <div className="mar-top-2">
                    <Link to="/share" className="button button__black px-5">
                      save
                    </Link>
                  </div>
                </div>

                <div className="col-md-4 px-4">
                  <div className="mb-3">
                    <BadgeGreyGreen className="earn-badge mr-2" />
                    <span className="heading heading__tertiary">
                      Earn a badge ...
                    </span>
                  </div>
                  <p>
                    We award you a loyalty badge to display on your profile for
                    the world to acknowledge your efforts at helping to the
                    society to be better. Women and men who are already involved
                    in women’s empowerment activities earn a badge directly at
                    sign in, as we review your form submissions.
                  </p>
                  <div className="profile__logout">
                    <Link className="text-danger ">Log out</Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProfile;
