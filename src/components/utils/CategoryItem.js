import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import backgroundImg2 from "../../assets/Picture 2.png";

class CategoryItem extends Component {
  state = {
    list: []
  };

  // componentDidMount() {
  //   axios.defaults.headers.common["Devless-token"] =
  //     "ecdc2527d340c7ecc4056cc1db6f6a51";

  //   axios
  //     .get(
  //       "http://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=id,21"
  //     )
  //     .then(res => {
  //       console.log(res.data.payload.results);
  //     });
  // }
  render() {
    const { author, category, title, id } = this.props.categoryItem;

    console.log(this.props.categoryItem);

    return (
      <div>
        <Link to={`/articles/${id}`}>
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
        </Link>
      </div>
    );
  }
}

export default CategoryItem;
