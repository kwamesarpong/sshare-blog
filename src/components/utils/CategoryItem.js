import React, { Component } from "react";

import backgroundImg2 from "../../assets/Picture 2.png";

class CategoryItem extends Component {
  state = {
    list: []
  };
  render() {
    const { categoryItem } = this.props;

    // for (let key in categoryItem) {
    //   console.log(key);
    //   console.log(categoryItem[key]);
    // }

    return (
      <div>
        <div className="col-md-4">
          <img src={backgroundImg2} alt="body and mind" className="img-fluid" />
        </div>
        <div className="col-md-2">
          <h5 className="heading heading__tertiary-3">The Secret Treat</h5>
          <p>AMBER NICOLE</p>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
