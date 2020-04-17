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

class Profile2 extends Component {
  state = {
    showPost: false,
    category: [
      {
        id: 1,
        devless_user_id: 1,
        author: "Amber Nicole",
        category: "mindnbody",
        title: "The Secret Treat",
        blog_story: `Lorem ipsum dolor sit amet, consectetur adipiscing
         elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Dignissim cras tincidunt lobortis
         feugiat vivamus at augue eget. Posuere ac ut consequat
         semper viverra nam libero justo laoreet. Elementum tempus
         egestas sed sed risus pretium quam vulputate. Id ornare
         arcu odio ut. Enim neque volutpat ac tincidunt vitae semper.
         Eget sit amet tellus cras adipiscing enim eu. Massa massa
         ultricies mi quis hendrerit. Tortor consequat id porta nibh
         venenatis. Dictum non consectetur a erat nam at lectus urna duis.
         Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
         Et odio pellentesque diam volutpat commodo sed egestas egestas.
         Interdum posuere lorem ipsum dolor sit amet consectetur. In arcu
         cursus euismod quis viverra.`,
        created_at: null,
        img_url: null,
        author_img: null,
      },
      {
        id: 2,
        devless_user_id: 1,
        author: "Amber Nicole",
        category: "mindnbody",
        title: "The Secret Treat",
        blog_story: `Lorem ipsum dolor sit amet, consectetur adipiscing
         elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Dignissim cras tincidunt lobortis
         feugiat vivamus at augue eget. Posuere ac ut consequat
         semper viverra nam libero justo laoreet. Elementum tempus
         egestas sed sed risus pretium quam vulputate. Id ornare
         arcu odio ut. Enim neque volutpat ac tincidunt vitae semper.
         Eget sit amet tellus cras adipiscing enim eu. Massa massa
         ultricies mi quis hendrerit. Tortor consequat id porta nibh
         venenatis. Dictum non consectetur a erat nam at lectus urna duis.
         Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
         Et odio pellentesque diam volutpat commodo sed egestas egestas.
         Interdum posuere lorem ipsum dolor sit amet consectetur. In arcu
         cursus euismod quis viverra.`,
        created_at: null,
        img_url: null,
        author_img: null,
      },
      {
        id: 3,
        devless_user_id: 1,
        author: "Amber Nicole",
        category: "mindnbody",
        title: "The Secret Treat",
        blog_story: `Lorem ipsum dolor sit amet, consectetur adipiscing
         elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Dignissim cras tincidunt lobortis
         feugiat vivamus at augue eget. Posuere ac ut consequat
         semper viverra nam libero justo laoreet. Elementum tempus
         egestas sed sed risus pretium quam vulputate. Id ornare
         arcu odio ut. Enim neque volutpat ac tincidunt vitae semper.
         Eget sit amet tellus cras adipiscing enim eu. Massa massa
         ultricies mi quis hendrerit. Tortor consequat id porta nibh
         venenatis. Dictum non consectetur a erat nam at lectus urna duis.
         Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
         Et odio pellentesque diam volutpat commodo sed egestas egestas.
         Interdum posuere lorem ipsum dolor sit amet consectetur. In arcu
         cursus euismod quis viverra.`,
        created_at: null,
        img_url: null,
        author_img: null,
      },
      {
        id: 4,
        devless_user_id: 1,
        author: "Amber Nicole",
        category: "mindnbody",
        title: "The Secret Treat",
        blog_story: `Lorem ipsum dolor sit amet, consectetur adipiscing
         elit, sed do eiusmod tempor incididunt ut labore et
         dolore magna aliqua. Dignissim cras tincidunt lobortis
         feugiat vivamus at augue eget. Posuere ac ut consequat
         semper viverra nam libero justo laoreet. Elementum tempus
         egestas sed sed risus pretium quam vulputate. Id ornare
         arcu odio ut. Enim neque volutpat ac tincidunt vitae semper.
         Eget sit amet tellus cras adipiscing enim eu. Massa massa
         ultricies mi quis hendrerit. Tortor consequat id porta nibh
         venenatis. Dictum non consectetur a erat nam at lectus urna duis.
         Ultrices mi tempus imperdiet nulla malesuada pellentesque elit.
         Et odio pellentesque diam volutpat commodo sed egestas egestas.
         Interdum posuere lorem ipsum dolor sit amet consectetur. In arcu
         cursus euismod quis viverra.`,
        created_at: null,
        img_url: null,
        author_img: null,
      },
    ],
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchAuthor(id);

    this.props.fetchAuthors();

    // let authorName

    // this.props.fetchAuthorArticles(authorName);
  }
  render() {
    const { author, authors, loading } = this.props.authors;
    // const { category } = this.props.categories

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
              src={author.author_img} //todo use real image when added
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
          <p className="mt-5 contributor-profile__card-text">
            Women are smart, resourceful and resilient. I believe every woman
            should be empowered to be bright and bold enough to take up life as
            a formidable individual.
          </p>
          <a
            href="https://web.facebook.com/amina.able"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://web.facebook.com/amina.able
          </a>
          <h5 className="heading heading__tertiary-2 mt-5">Articles</h5>
          {this.state.showPost ? (
            <h5 className="heading heading__tertiary-2 heading__tertiary-2-light mt-5">
              No Post Yet
            </h5>
          ) : (
            <div className="mt-5">
              <Categories categories={this.state.category} />
            </div>
          )}
        </div>
      );
    }

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
