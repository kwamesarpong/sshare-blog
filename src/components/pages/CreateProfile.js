import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "../utils/Input";
import Navbar from "./Navbar";
import { ReactComponent as BadgeGreyGreen } from "../../assets/SISTAZSHARE-BADGE.svg";
import Footer from "../utils/Footer";
import queryString from "query-string";

class CreateProfile extends Component {
  state = {
    userData: {
      profilePicture: "",
      nationality: "",
      bio: "",
      url: "",
      number: "",
      email: "",
    },
  };
  componentDidMount() {
    console.log(this.props.location);

    // console.log(this.props.history);

    const userData = queryString.parse(this.props.location.search);

    console.log(userData);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.userData);
  };
  render() {
    const {
      profilePicture,
      email,
      bio,
      nationality,
      url,
      number,
    } = this.state.userData;
    return (
      <div>
        <Navbar whitePage={true} />
        <div className="container">
          <h2 className="my-5 heading heading__primary">Profile</h2>
        </div>
        <div className="contributor-profile__bio py-4">
          <form onSubmit={this.handleSubmit} className="py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-4 px-4">
                  <Input
                    type="text"
                    label="Image Url"
                    name="profilePicture"
                    value={profilePicture}
                    onChange={this.handleChange}
                  />

                  <Input
                    type="text"
                    name="nationality"
                    label="Nationality"
                    value={nationality}
                    onChange={this.handleChange}
                  />
                  <Input
                    type="text"
                    name="bio"
                    label="Bio"
                    value={bio}
                    onChange={this.handleChange}
                  />

                  <Input
                    type="url"
                    name="url"
                    label="Website or a preferred social media URL"
                    value={url}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-md-4 px-4">
                  <Input
                    type="number"
                    name="telephone"
                    label="WhatsApp Number *"
                    value={number}
                    onChange={this.handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    label="Email *"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <p className="mt-5">
                    * Information provided here will not be shared with the
                    public.
                  </p>

                  <div className="mar-top-2">
                    <button className="button button__black px-5">save</button>
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
                    <Link className="text-danger" to="">
                      Log out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    );
  }
}

export default CreateProfile;
