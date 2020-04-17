import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions/categoriesAction";
import { Animated } from "react-animated-css";

import { getCategoriesTitle } from "../utils/utilsfunctions";

import Categories from "../utils/Categories";
import Header from "./Header";
import Loader from "react-loader-spinner";
import Footer from "../utils/Footer";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, loading } = this.props.categories;

    let renderCategory;

    if (categories === null || loading) {
      renderCategory = (
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderCategory = categories.map((category, index) => (
        <div key={index}>
          <h5 className="heading heading__tertiary-2 my-5 text-uppercase">
            {getCategoriesTitle(category)}
            {/* {this.getCategoryTitle(category)} */}
          </h5>
          <Categories categories={category} />
        </div>
      ));
    }

    return (
      <div>
        <Animated
          animationIn="fadeIn"
          animationInDuration={1000}
          animationOutDuration={1000}
          animationOut="fadeOut"
          isVisible={true}
        >
          <Header />
        </Animated>

        <div className="container categories my-5">{renderCategory}</div>
        {!loading ? <Footer /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

export default connect(mapStateToProps, { fetchCategories })(Home);
