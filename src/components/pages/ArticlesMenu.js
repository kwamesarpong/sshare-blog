import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { fetchCategories } from "../../actions/categoriesAction";
import { getCategoriesTitle } from "../utils/utilsfunctions";

import { ReactComponent as ArticleMenu } from "../../assets/SISTAZSHARE-CONTRIBUTE-4.svg";
import Navbar from "./Navbar";

class ArticlesMenu extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, loading } = this.props.categories;

    console.log(this.props);

    let renderCat;

    if (categories === null || loading) {
      renderCat = (
        <Loader
          type="ThreeDots"
          color="#00b399"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      );
    } else {
      renderCat = categories.map(category => (
        <li key={category[0].id} className="menu__links link-font">
          <Link to={`/articles/${category[0].category}`}>
            {getCategoriesTitle(category)}
          </Link>
        </li>
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
              <ul>{renderCat}</ul>

              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search ..."
              />
              <div className="pb-3 pt-5">
                <Link to="" className="button button__black">
                  join us
                </Link>
              </div>
              <div>
                <Link to="" className="button button__black">
                  tell a friend
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <ArticleMenu className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { fetchCategories })(ArticlesMenu);
