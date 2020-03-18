import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../actions/categoriesAction";
import Loader from "react-loader-spinner";
import { Animated } from "react-animated-css";

import Categories from "../utils/Categories";
import Navbar from "./Navbar";
import { getCategoriesTitle } from "../utils/utilsfunctions";

class ArticlesPage extends Component {
  componentDidMount() {
    const { category } = this.props.match.params;

    this.props.fetchCategory(category);
  }
  render() {
    const { category, loading } = this.props.categories;

    let renderCategory;

    if (category === null || loading) {
      renderCategory = (
        <Loader type="ThreeDots" color="#00b399" height={100} width={100} />
      );
    } else {
      renderCategory = <Categories categories={category} />;
    }

    return (
      <div className="articles__page">
        <Navbar whitePage={true} />
        <Animated
          animationIn="fadeIn"
          animationInDuration={2000}
          animationOutDuration={2000}
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="container py-5">
            {category ? (
              <h2 className=" pb-5">
                Articles from{" "}
                <span className="heading heading__secondary-2 ml-2">
                  {getCategoriesTitle(category)}
                </span>
              </h2>
            ) : null}

            {renderCategory}

            {/* <div>{category ? <Categories categories={category} /> : null}</div> */}
          </div>
        </Animated>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

export default connect(mapStateToProps, { fetchCategory })(ArticlesPage);
