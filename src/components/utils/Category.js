import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

class Category extends Component {
  render() {
    const { categories } = this.props;

    console.log(typeof categories, categories);

    return (
      <div>
        {categories.map((categoryItem, index) => (
          <CategoryItem key={index} categoryItem={categoryItem} />
        ))}
      </div>
    );
  }
}

export default Category;
