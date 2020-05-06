import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import TextInput from "../utils/TextInput";
import Navbar from "./Navbar";
import { ReactComponent as BadgeGreyGreen } from "../../assets/SISTAZSHARE-BADGE.svg";
import Footer from "../utils/Footer";
import queryString from "query-string";

class CreateProfile extends Component {
  state = {
    nationality: "",
    bio: "",
    url: "",
    phone: "",
    errors: {},
  };
  componentDidMount() {
    console.log(this.props.location);

    // console.log(this.props.history);

    // const userData = queryString.parse(this.props.location.search);

    // console.log(userData);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { profilePicture, nationality, bio, url, phone, email } = this.state;

    if (profilePicture === "") {
      this.setState({
        errors: { profilePicture: "Profile Picture is required" },
      });
      return;
    }
    if (nationality === "") {
      this.setState({ errors: { nationality: "Nationality is required" } });
      return;
    }
    if (bio === "") {
      this.setState({ errors: { bio: "Bio is required" } });
      return;
    }
    if (url === "") {
      this.setState({
        errors: { url: "Website or preferred social media URL  is required" },
      });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "A valid phone number is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "A valid email is required" } });
      return;
    }

    console.log(this.state);
  };
  render() {
    const { bio, nationality, url, phone, errors } = this.state;

    // console.log(this.props);
    // const { errors } = this.state;

    console.log(this.props.author.author);

    const { profile } = this.props.author.author;

    console.log("profile...", profile);

    // let profile;
    // if (this.props.author) {
    //   profile = this.props.author.author.profile;
    // }

    // console.log(profile);

    // const { profile } = this.props.author.author;

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
                  {profile.picture.data.url ? (
                    <TextInput
                      type="text"
                      label="Image Url"
                      name="profilePicture"
                      value={profile.picture.data.url}
                      onChange={this.handleChange}
                      error={errors.profilePicture}
                    />
                  ) : null}

                  <TextInput
                    label="Nationality"
                    name="nationality"
                    type="text"
                    value={nationality}
                    onChange={this.handleChange}
                    error={errors.nationality}
                  />
                  <TextInput
                    label="Bio"
                    name="bio"
                    type="text"
                    value={bio}
                    onChange={this.handleChange}
                    error={errors.bio}
                  />
                  <TextInput
                    label="Website or a preferred social media URL"
                    name="url"
                    type="url"
                    value={url}
                    onChange={this.handleChange}
                    error={errors.url}
                  />
                </div>

                <div className="col-md-4 px-4">
                  <TextInput
                    label="WhatsApp Number *"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />

                  {profile.email ? (
                    <TextInput
                      label="Email *"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={this.handleChange}
                      error={errors.email}
                    />
                  ) : null}

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

const mapStateToProps = (state) => {
  return {
    author: state.authors,
  };
};

export default connect(mapStateToProps)(CreateProfile);
