import React, { Component } from "react";
import { connect } from "react-redux";

import { getCategoriesTitle } from "../utils/utilsfunctions";

import { fetchCategories } from "../../actions/categoriesAction";

import Categories from "../utils/Categories";
import Header from "./Header";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;

    console.log(categories);

    return (
      <div>
        <Header />
        <div className="container categories my-5">
          {categories.map((category, index) => (
            <div key={index}>
              <h5 className="heading heading__tertiary-2 my-5 text-uppercase">
                {getCategoriesTitle(category)}
                {/* {this.getCategoryTitle(category)} */}
              </h5>
              <Categories categories={category} />
            </div>
          ))}
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

export default connect(mapStateToProps, { fetchCategories })(Home);
