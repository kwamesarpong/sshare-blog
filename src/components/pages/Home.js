import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCategories } from "../../actions/categoriesAction";

import axios from "axios";

import Categories from "../utils/Categories";
import Header from "./Header";

class Home extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    // console.log(this.props.categories);
    
    return (
      <div>
        <Header />
        <div className="container categories">
          <Categories categories={this.props.categories} />
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
