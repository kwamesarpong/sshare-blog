import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

import Navbar from "./Navbar";
import { fetchAuthors } from "../../actions/AuthorAction";

import { ReactComponent as ContributorsSvg } from "../../assets/SISTAZSHARE-CONTRIBUTE-4.svg";

import commPerson from "./../../assets/comm-person.png";
import ProfileCard from "../utils/ProfileCard";

class Contributors extends Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }

  render() {
    const { authors, loading } = this.props.authors;

    console.log(this.props);

    let renderContributors;

    if (authors === null || loading) {
      renderContributors = (
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderContributors = authors.map(author => (
        <Animated
          animationIn="fadeIn"
          animationInDuration={400}
          animationOut="fadeOut"
          isVisible={true}
        >
          <div
            className="col-md-4"
            key={author.id}
            onClick={() =>
              this.props.history.push(`/contributors/${author.id}`)
            }
          >
            <ProfileCard
              // className="col-md-4"
              // onClick={() =>
              //   this.props.history.push(
              //     `/contributor/${author.id}`
              //   )
              // }
              commPerson={commPerson}
              name={author.name}
              country={author.location}
            />
          </div>
        </Animated>
      ));
    }

    return (
      <div className="contributors">
        <Navbar whitePage={true} />

        <div className="container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search People ..."
            className="mb-5"
          />

          <div className="row">
            <div className="col-md-9">
              <div className="row">{renderContributors}</div>
            </div>

            <div className="col-md-3">
              <ContributorsSvg className="img-fluid pb-5 ml-2" />
              <Link
                to="/register"
                className="button button__black mb-3 ml-2 mr-5"
              >
                JOIN US
              </Link>
              <Link to="/share" className="button button__black ml-2 mr-5 mb-5">
                TELL A FRIEND
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors
  };
};

export default connect(mapStateToProps, { fetchAuthors })(Contributors);
