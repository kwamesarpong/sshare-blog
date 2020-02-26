import React from "react";
import { Link } from "react-router-dom";

// import Series from "../pages/Series";

const ArticlesCardLarge = ({
  title,
  author,
  post,
  time,
  category,
  img1,
  img2,
  series,
  seriesTitle,
  seriesAuthor,
  seriesPost
}) => {
  return (
    // <div className="large">
    <div className="col-md-9">
      <div className="articles__large">
        <img src={img1} alt={title} className="img-fluid" />
        <h4 className="pb-1 pt-4">{title}</h4>
        <h6>{author}</h6>
        <hr />
        {/* <p className="pb-5">{post}</p> */}
        <div dangerouslySetInnerHTML={{ __html: post }}></div>
        {series ? (
          <div>
            <h5 className="pb-1 pt-4">{seriesTitle}</h5>
            <h6>{seriesAuthor}</h6>
            <p className="pb-5">{seriesPost}</p>
          </div>
        ) : (
          <div></div>
        )}
        {series ? (
          <div>
            <h5 className="pb-1 pt-4">{seriesTitle}</h5>
            <h6>{seriesAuthor}</h6>
            <p className="pb-5">{seriesPost}</p>
          </div>
        ) : (
          <div></div>
        )}
        <small className="text-muted pb-5">
          {time}
          {/* {`${estimatedTime} minutes read`} */}

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
        </small>

        {img2 ? (
          <>
            <h3 className="heading heading__tertiary py-5">
              More from {category}
            </h3>
            <img src={img2} alt={title} className="img-fluid pb-5" />
          </>
        ) : (
          <div></div>
        )}

        {series ? (
          <div className=" articles__link">
            <Link>EXPLORE NEXT</Link>
            <i className="fas fa-caret-right ml-3"></i>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ArticlesCardLarge;
