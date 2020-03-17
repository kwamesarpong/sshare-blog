import React, { Component } from "react";
import CategoryItem from "./CategoryItem";

class Category extends Component {
  getFirstHalf = () => {
    const firstHalfArr = this.props.categories.filter((cat, index) => {
      if (index !== 0 && index !== 1) return cat;
    });

    return firstHalfArr;
  };
  getSecondHalf = () => {
    const secondHalfArr = this.props.categories.filter((cat, index) => {
      if (index !== 2 && index !== 3) return cat;
    });

    return secondHalfArr;
  };

  render() {
    // const { categories } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6 mb-4">
            {this.getFirstHalf().map((categoryItem, index) => (
              <CategoryItem key={index} categoryItem={categoryItem} />
            ))}
          </div>
          <div className="col-md-6">
            {this.getSecondHalf().map((categoryItem, index) => (
              <CategoryItem key={index} categoryItem={categoryItem} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
