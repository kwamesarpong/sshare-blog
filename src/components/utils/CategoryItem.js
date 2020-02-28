import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import backgroundImg2 from "../../assets/Picture 2.png";

class CategoryItem extends Component {
  render() {
    const { author, category, title, id } = this.props.categoryItem;

    // console.log(this.props.categoryItem);

    return (
      <div className="categories__item">
        <Link to={`/articles/${id}`} className="categories__item-link">
          <div className="row  mb-5">
            <div className="col-md-7">
              <img
                src={backgroundImg2}
                alt="body and mind"
                className="img-fluid"
              />
            </div>
            <div className="col-md-5">
              <h5 className="font-weight-bold">{title}</h5>
              <p>{author}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default CategoryItem;
