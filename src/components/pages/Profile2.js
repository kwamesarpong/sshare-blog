import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

import { fetchAuthor, fetchAuthors } from "../../actions/AuthorAction";
import { fetchAuthorArticles } from "../../actions/ArticlesAction";
import Navbar from "./Navbar";

import ProfileCard from "../utils/ProfileCard";
// import commPerson from "./../../assets/comm-person.png";
import { ReactComponent as BadgeGrey } from "../../assets/SISTAZSHARE-BADGE-GREY.svg";
import Categories from "../utils/Categories";
import Footer from "../utils/Footer";

const authorProfile = JSON.parse(localStorage.getItem("sisterShareAuthFB"));
class Profile2 extends Component {
  componentDidMount() {
    // const authUser = JSON.parse(localStorage.getItem("Auth"));

    // authorProfile = JSON.parse(localStorage.getItem("sisterShareAuthFB"));

    // const id = authUser.id;

    // console.log(id);

    // this.props.fetchAuthor(id);

    const authorName = {
      authorFirtName: authorProfile.first_name,
      authorLastName: authorProfile.last_name,
    };

    this.props.fetchAuthors();
    this.props.fetchAuthorArticles(authorName);

    // let authorName

    // this.props.fetchAuthorArticles(authorName);
  }
  render() {
    const { author, authors, loading } = this.props.authors;
    const { articles } = this.props.articles;

    console.log(articles);
    // const { category } = this.props.categories

    let renderProfile;

    // if (author === null || loading) {
    //   renderProfile = (
    //     <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
    //   );
    if (authorProfile === null || loading) {
      renderProfile = (
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderProfile = (
        <div>
          <div className="contributor-profile__card">
            <img
              src={authorProfile.profilePicture}
              alt="contributor"
              className="contributor-profile__card-img"
            />
            <p className="contributor-profile__card-title">
              <span className="mr-2">{authorProfile.first_name}</span>
              <span>{authorProfile.last_name}</span>
              <span>
                <BadgeGrey className="ml-3 contributor-profile__card-img1" />
                <i className="fas fa-pencil-alt mar-left"></i>
              </span>
            </p>
            <p className="contributor-profile__card-subtitle pt-2">
              {authorProfile.nationality}
            </p>
          </div>
          {/* <p className="mt-5 contributor-profile__card-text">
            Women are smart, resourceful and resilient. I believe every woman
            should be empowered to be bright and bold enough to take up life as
            a formidable individual.
          </p> */}
          <p className="mt-5 contributor-profile__card-text">
            {authorProfile.bio}
          </p>
          <a
            href="https://web.facebook.com/amina.able"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* https://web.facebook.com/amina.able */}
            {authorProfile.socialUrl}
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

    console.log(authorProfile);

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
})(Profile2);
