import React, { Component } from "react";
import Category from "./Category";
// import CategoryItem from "./CategoryItem";

class Categories extends Component {
  state = {};

  // after we get products from db
  // componentDidMount() {
  //call to action for all categories
  // TODO: this.props.getCategories
  // }

  render() {
    console.log(this.props.categories);

    return (
      <div>
        {!this.props.categories ? (
          <div>Loading</div> // TODO: Show spinner
        ) : (
          <Category categories={this.props.categories} />
          //   cats.map((categories, index) => (
          //     <div>
          //       <Category key={index} categories={categories} />
          //     </div>
          //   ))
        )}
      </div>
    );
  }
}

export default Categories;
