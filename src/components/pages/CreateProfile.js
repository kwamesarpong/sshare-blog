import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createAuthorProfile } from "../../actions/AuthorAction";

import { connect } from "react-redux";

import TextInput from "../utils/TextInput";
import Navbar from "./Navbar";
import { ReactComponent as BadgeGreyGreen } from "../../assets/SISTAZSHARE-BADGE.svg";
import Footer from "../utils/Footer";
import queryString from "query-string";

class CreateProfile extends Component {
  state = {
    profilePicture: this.props.author.author.profile.picture.data.url,
    email: this.props.author.author.profile.email,
    nationality: "",
    password: "",
    dateOfBirth: "",
    bio: "",
    url: "",
    phone: "",
    errors: {},
  };
  componentDidMount() {}

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const {
      nationality,
      bio,
      url,
      phone,
      email,
      profilePicture,
      password,
      dateOfBirth,
    } = this.state;

    const { first_name, last_name } = this.props.author.author.profile;

    console.log(first_name);
    console.log(last_name);

    const userData = {
      nationality,
      bio,
      url,
      phone,
      email,
      profilePicture,
      password,
      dateOfBirth,
      first_name,
      last_name,
    };

    if (profilePicture === "") {
      this.setState({
        errors: { profilePicture: "The Profile Picture field is required" },
      });
      return;
    }
    if (nationality === "") {
      this.setState({
        errors: { nationality: "The Nationality field is required" },
      });
      return;
    }
    if (bio === "") {
      this.setState({ errors: { bio: "The Bio is required" } });
      return;
    }
    if (url === "") {
      this.setState({
        errors: {
          url: "The Website or preferred social media URL field  is required",
        },
      });
      return;
    }
    if (phone === "") {
      this.setState({
        errors: { phone: "The phone number field is required" },
      });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "The email field is required" } });
      return;
    }
    if (password === "") {
      this.setState({ errors: { password: "The Password field is required" } });
      return;
    }
    if (dateOfBirth === "") {
      this.setState({
        errors: { confirmPassword: "The confirm password field is required" },
      });
      return;
    }

    this.props.createAuthorProfile(userData, this.props.history);

    console.log(userData);

    this.setState({
      profilePicture: "",
      email: "",
      nationality: "",
      bio: "",
      url: "",
      phone: "",
      password: "",
      dateOfBirth: "",
      errors: {},
    });
  };
  render() {
    const {
      bio,
      nationality,
      url,
      phone,
      errors,
      profilePicture,
      email,
      password,
      dateOfBirth,
    } = this.state;

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
                  <TextInput
                    type="text"
                    label="Image Url"
                    name="profilePicture"
                    value={profilePicture}
                    onChange={this.handleChange}
                    error={errors.profilePicture}
                  />

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
                    label="Date of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={this.handleChange}
                    error={errors.dateOfBirth}
                  />
                  <TextInput
                    label="WhatsApp Number"
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={this.handleChange}
                    error={errors.phone}
                  />

                  <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleChange}
                    error={errors.email}
                  />

                  <TextInput
                    label="Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={this.handleChange}
                    error={errors.password}
                  />

                  <div className="text-center  mt-5">
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

                  <p className="mt-5">
                    * Information provided here will not be shared with the
                    public.
                  </p>

                  {/* <div className="profile__logout">
                    <Link className="text-danger" to="">
                      Log out
                    </Link>
                  </div> */}
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

export default connect(mapStateToProps, { createAuthorProfile })(CreateProfile);
