import React, { Component } from "react";

import backgroundImg2 from "../../assets/Picture 2.png";

class CategoryItem extends Component {
  state = {
    list: []
  };
  render() {
    const { author, category, title } = this.props.categoryItem;

    return (
      <div>
        <div className="row  mb-5">
          <div className="col-md-8">
            <img
              src={backgroundImg2}
              alt="body and mind"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4">
            <h5 className="font-weight-bold">{title}</h5>
            <p>{author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
