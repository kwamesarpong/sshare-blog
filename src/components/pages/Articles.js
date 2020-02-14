import React, { Component } from "react";
import Navbar from "./Navbar";
import ArticlesCardLarge from "../utils/ArticlesCardLarge";
import ArticlesCardSmall from "../utils/ArticlesCardSmall";

import backgroundImg from "../../assets/Picture 30.png";
import backgroundImg2 from "../../assets/Picture 2.png";

class Articles extends Component {
  state = {
    title: "Congruent",
    author: "TARSHA ALBRIGHT",
    time: 5,
    category: "MORE FROM MIND ∙ BODY",
    post: `Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the
        complexities of her life. We introduce you to a digital sphere of telling the timeless chronicles of women’s lives, in real time.
        Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the complexities of her life. We introduce you to a digital sphere of telling the timeless chronicles of
        women’s lives, in real time. Sistaz Share spotlights the everyday modern woman, narrating the
        savvy patterns that make up the complexities other life. Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the complexities of her life. We introduce you to a
        digital sphere of telling the timeless chronicles of women’s lives, in real time. Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the complexities other life`
  };
  render() {
    const { title, author, post, time, category } = this.state;
    return (
      <div className="articles">
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
              img2={backgroundImg2}
            />
            <ArticlesCardSmall />
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
