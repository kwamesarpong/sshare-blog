import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

import { fetchCategories } from "../../actions/categoriesAction";
import { getCategoriesTitle } from "../utils/utilsfunctions";

import { ReactComponent as ArticleMenu } from "../../assets/SISTAZSHARE-CONTRIBUTE-4.svg";
import Navbar from "./Navbar";
import Footer from "../utils/Footer";

class ArticlesMenu extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, loading } = this.props.categories;

    let renderLinks;

    if (categories === null || loading) {
      renderLinks = (
        // render animated dots when fetching data
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderLinks = categories.map((category) => (
        // this let links fadein nicely
        <Animated
          animationIn="fadeIn"
          animationInDuration={800}
          animationOutDuration={800}
          animationOut="fadeOut"
          isVisible={true}
        >
          <li key={category[0].id} className="menu__links link-font">
            <Link to={`/articles/${category[0].category}`}>
              {getCategoriesTitle(category)}
            </Link>
          </li>
        </Animated>
      ));
    }

    return (
      <div className="menu">
        <Navbar whitePage={true} />

        <div className="container py-4">
          <h2 className="my-5">Articles Categories</h2>
          <div className="row">
            <div className="col-md-6">
              {/* <ul>{this.renderLinks(categories)}</ul> */}

              <ul>{renderLinks}</ul>

              {/* <input
                type="text"
                name="search"
                id="search"
                placeholder="Search ..."
              /> */}
              <div className="pb-3 py-5">
                <Link to="/signup" className="button button__black">
                  join us
                </Link>
              </div>
              {/* <div>
                <Link to="" className="button button__black">
                  tell a friend
                </Link>
              </div> */}
            </div>
            <div className="col-md-6">
              <ArticleMenu className="img-fluid" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { fetchCategories })(ArticlesMenu);
