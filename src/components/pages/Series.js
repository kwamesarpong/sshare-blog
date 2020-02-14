import React, { Component } from "react";
import Navbar from "./Navbar";
import ArticlesCardLarge from "../utils/ArticlesCardLarge";
import ArticlesCardSmall from "../utils/ArticlesCardSmall";

import backgroundImg from "../../assets/Picture-1.png";

class Series extends Component {
  state = {
    title: "PMS",
    author: "TARSHA ALBRIGHT",
    time: 9,
    category: "MORE FROM MIND ∙ BODY",
    post: `Sistaz Share spotlights the everyday woman, narrating the savvy patterns
    that make up the complexities of her life. We introduce you to a digital
    sphere of telling the timeless chronicles of women’s lives, in real time.`,
    seriesTitle: "Pills To Take",
    seriesAuthor: "ALEXIS K. OKOH, MD",
    seriesPost: `Sistaz Share spotlights the everyday modern woman, narrating the
    savvy patterns that make up the complexities of her life. We introduce you to a
    digital sphere of telling the timeless chronicles of women’s lives, in real time.
    Sistaz Share spotlights the everyday modern woman, narrating the
    savvy patterns that make up the complexities other life.`
  };
  render() {
    const {
      title,
      author,
      post,
      time,
      category,
      seriesAuthor,
      seriesPost,
      seriesTitle
    } = this.state;
    return (
      <div className="series">
        <Navbar whitePage={true} />

        <div className="container pt-5">
          <div className="row">
            <ArticlesCardLarge
              title={title}
              author={author}
              post={post}
              time={time}
              category={category}
              img1={backgroundImg}
              series={true}
              seriesTitle={seriesTitle}
              seriesAuthor={seriesAuthor}
              seriesPost={seriesPost}
            />
            <ArticlesCardSmall />
          </div>
        </div>
      </div>
    );
  }
}

export default Series;
