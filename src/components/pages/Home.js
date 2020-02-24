import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../actions/categoriesAction";

import Categories from "../utils/Categories";
import Header from "./Header";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  getCategoryTitle = categories => {
    const categoryNames = categories.map(category => {
      if (category.category === "lovesexrelationships")
        return "Love ●  Sex ●  Relationships";
      if (category.category === "motivationinspiration")
        return "Motivation ●  Inspiration";
      if (category.category === "money") return "Money";
      if (category.category === "feminism") return "Feminism";
      if (category.category === "lifestyleculture")
        return "Lifestyle ●  Culture";
      if (category.category === "news") return "News";
      if (category.category === "mindnbody") return "Mind ● And ● Body";
    });

    return categoryNames[0];
  };

  render() {
    const { categories } = this.props;

    return (
      <div>
        <Header />
        <div className="container categories my-5">
          {categories.map((category, index) => (
            <div key={index}>
              <h5 className="heading heading__tertiary-2 my-5 text-uppercase">
                {this.getCategoryTitle(category)}
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
