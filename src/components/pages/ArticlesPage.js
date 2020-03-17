import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../actions/categoriesAction";

import Categories from "../utils/Categories";
import Navbar from "./Navbar";
import { getCategoryTitle, getCategoriesTitle } from "../utils/utilsfunctions";

class ArticlesPage extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;

    // console.log(category, "from article page");

    this.props.fetchCategory(category);
  }
  render() {
    const { category } = this.props;

    return (
      <div className="articles__page">
        <Navbar whitePage={true} />
        <div className="container py-5">
          {category ? (
            <h2 className=" pb-5">
              Articles from{" "}
              <span className="heading heading__secondary-2 ml-2">
                {getCategoriesTitle(category)}
              </span>
            </h2>
          ) : null}
          <div>{category ? <Categories categories={category} /> : null}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.categories.category
  };
};

export default connect(mapStateToProps, { fetchCategory })(ArticlesPage);
