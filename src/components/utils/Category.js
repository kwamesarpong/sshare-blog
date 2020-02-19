import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

class Category extends Component {
  render() {
    const { categories } = this.props;

    // const firstCat = categories.splice(0, 1);
    // const secCat = categories.splice(1);

    // console.log(firstCat);
    // console.log(secCat);

    console.log(categories);

    return (
      <div>
        <h3 className="heading heading__secondary-2">Category Name</h3>
        <div className="row">
          <div className="col-md-6">
            {categories.map((categoryItem, index) => (
              <CategoryItem key={index} categoryItem={categoryItem} />
            ))}
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    );
  }
}

export default Category;
