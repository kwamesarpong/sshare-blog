import React, { Component } from "react";
import Category from "./Category";

class Categories extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="categories">
        {!categories ? (
          <div>Loading</div> // TODO: Show spinner
        ) : (
          <div>
            <Category categories={categories} />
            <hr className="mb-5" />
          </div>
        )}
      </div>
    );
  }
}

export default Categories;
