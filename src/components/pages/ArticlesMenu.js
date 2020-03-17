import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCategories } from "../../actions/categoriesAction";

import { ReactComponent as ArticleMenu } from "../../assets/SISTAZSHARE-CONTRIBUTE-4.svg";

import Navbar from "./Navbar";
import { getCategoriesTitle } from "../utils/utilsfunctions";

class ArticlesMenu extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { categories } = this.props;

    return (
      <div className="menu">
        <Navbar whitePage={true} />

        <div className="container py-4">
          <h2 className="my-5">Articles Categories</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>
                {categories
                  ? categories.map(category => (
                      <li
                        key={category[0].id}
                        className="menu__links link-font"
                      >
                        <Link to={`/articles/${category[0].category}`}>
                          {getCategoriesTitle(category)}
                        </Link>
                      </li>
                    ))
                  : null}
              </ul>

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
    categories: state.categories.categories
  };
};

export default connect(mapStateToProps, { fetchCategories })(ArticlesMenu);
