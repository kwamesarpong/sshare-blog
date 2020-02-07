import React from "react";

import backgroundImg from "./../../assets/Picture 30.png";
import backgroundImg2 from "./../../assets/Picture 2.png";
const ArticlesCardLarge = ({ title, author, post, time, category }) => {
  return (
    // <div className="large">
    <div className="col-md-9">
      <div className="articles__large">
        <img src={backgroundImg} alt={title} className="img-fluid" />
        <h4 className="pb-1 pt-4">{title}</h4>
        <h6>{author}</h6>
        <hr />
        <p className="pb-5">{post}</p>
        <p className="text-muted pb-5">
          {`${time} minutes read`}

          <span className="ml-5 icons">
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-square mr-3 icons icons__facebook"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter-square mr-3 icons icons__twitter"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin mr-3 icons icons__linkedin"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp-square mr-3 icons  icons__whatsapp"></i>{" "}
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link mr-3 icons icons__link"></i>{" "}
            </a>
          </span>
        </p>

        <h3 className="heading heading__tertiary-3 pb-4">{category}</h3>

        <img src={backgroundImg2} alt={title} className="img-fluid pb-5" />
      </div>
    </div>
  );
};

export default ArticlesCardLarge;
