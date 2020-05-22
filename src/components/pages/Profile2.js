import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

import {
  fetchAuthor,
  fetchAuthors,
  logoutUser,
} from "../../actions/AuthorAction";
import { fetchAuthorArticles } from "../../actions/ArticlesAction";
import Navbar from "./Navbar";

import ProfileCard from "../utils/ProfileCard";
// import commPerson from "./../../assets/comm-person.png";
import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";
import Categories from "../utils/Categories";
import Footer from "../utils/Footer";

const authorId = localStorage.getItem("sisterShareAuth");
class Profile2 extends Component {
  // state = {
  //   authorName: "",
  // };

  componentDidMount() {
    this.props.fetchAuthors();
    this.props.fetchAuthor(authorId);

    if (this.props.authors.author.name) {
      console.log("author name comdidmo", this.props.authors.author.name);

      this.props.fetchAuthorArticles(this.props.authors.author.name);
    }

    // this.setState({ authorName: this.props.authors.author.name });
  }

  componentDidUpdate(prevProps) {
    // console.log("prev prop", prevProps);
    // console.log("prev state", prevState);

    if (this.props.authors.author.name !== prevProps.authors.author.name) {
      this.props.fetchAuthorArticles(this.props.authors.author.name);
    }

    // console.log("author name after update", this.props.authors.author.name);
  }

  render() {
    const { author, authors, loading } = this.props.authors;
    const { articles } = this.props.articles;

    // console.log(articles);

    // console.log("author from db", author);

    let renderProfile;

    if (author === null || loading) {
      renderProfile = (
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderProfile = (
        <div>
          <div className="contributor-profile__card">
            <img
              src={author.author_img}
              alt="contributor"
              className="contributor-profile__card-img"
            />
            <p className="contributor-profile__card-title">
              {author.name}
              <span>
                <BadgeGrey className="ml-3 contributor-profile__card-img1" />
                <i className="fas fa-pencil-alt mar-left"></i>
              </span>
            </p>
            <p className="contributor-profile__card-subtitle pt-2">
              {author.location}
            </p>
          </div>
          {/* <p className="mt-5 contributor-profile__card-text">
            Women are smart, resourceful and resilient. I believe every woman
            should be empowered to be bright and bold enough to take up life as
            a formidable individual.
          </p> */}
          <p className="mt-5 contributor-profile__card-text">{author.bio}</p>
          <a href={author.social_url} target="_blank" rel="noopener noreferrer">
            {/* https://web.facebook.com/amina.able */}
            {author.social_url}
          </a>
          <h5 className="heading heading__tertiary-2 mt-5">Articles</h5>
          {articles && articles.length === 0 ? (
            <h5 className="heading heading__tertiary-2 heading__tertiary-2-light mt-5">
              No Post Yet
            </h5>
          ) : (
            <div className="mt-5">
              <Categories categories={articles} />
              {/* <Categories categories={this.state.category} /> */}
            </div>
          )}
        </div>
      );
    }

    // console.log(authorId);

    let renderOtherAuthors;

    if (authors === null || loading) {
      renderOtherAuthors = (
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderOtherAuthors = authors.map((authorProfile) => (
        <ProfileCard
          img={authorProfile.author_img}
          name={authorProfile.name}
          country={authorProfile.location}
          key={authorProfile.id}
        />
      ));
    }

    return (
      <div className="contributor-profile">
        <Navbar whitePage={true} />

        <div className="container py-5">
          <div className="row">
            <div className="col-md-9">
              <Animated
                animationIn="fadeIn"
                animationInDuration={2000}
                animationOutDuration={2000}
                animationOut="fadeOut"
                isVisible={true}
              >
                {renderProfile}
              </Animated>

              <div className="profile__logout mr-3">
                {/* <button className="button button__red" to="">
                  Log out
                </button> */}
                <p
                  className="text-danger"
                  onClick={() => this.props.logoutUser(this.props.history)}
                >
                  Log out
                </p>
              </div>
            </div>
            <div className="col-md-3 pl-5">
              <Animated
                animationIn="fadeIn"
                animationInDuration={2000}
                animationOutDuration={2000}
                animationOut="fadeOut"
                isVisible={true}
              >
                <h5 className="heading heading__tertiary pt-5 pb-3">
                  Other Contributors
                </h5>

                {renderOtherAuthors}

                <div>
                  <Link to="/share" className="ele-color">
                    Tell A Friend
                    <i className="fas fa-caret-right ml-3"></i>
                  </Link>
                </div>
              </Animated>
            </div>
          </div>
        </div>
        {!loading ? <Footer /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authors: state.authors,
    categories: state.categories,
    articles: state.articles,
  };
};

export default connect(mapStateToProps, {
  fetchAuthor,
  fetchAuthors,
  fetchAuthorArticles,
  logoutUser,
})(Profile2);
