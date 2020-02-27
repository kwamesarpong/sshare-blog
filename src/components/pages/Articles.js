import React, { Component } from "react";
import { connect } from "react-redux";

import readingTime from "reading-time";

import { getCategoryTitle } from "../utils/utilsfunctions";

import { fetchArticle } from "../../actions/ArticlesAction";
import { fetchCategories } from "../../actions/categoriesAction";

import Navbar from "./Navbar";
import ArticlesCardLarge from "../utils/ArticlesCardLarge";
import ArticlesCardSmall from "../utils/ArticlesCardSmall";

import backgroundImg from "../../assets/Picture 30.png";
import backgroundImg2 from "../../assets/Picture 2.png";

class Articles extends Component {
  // state = {
  //   title: "Congruent",
  //   author: "TARSHA ALBRIGHT",
  //   time: 5,
  //   category: "MORE FROM MIND ∙ BODY",
  //   post: `Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the
  //       complexities of her life. We introduce you to a digital sphere of telling the timeless chronicles of women’s lives, in real time.
  //       Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the complexities of her life. We introduce you to a digital sphere of telling the timeless chronicles of
  //       women’s lives, in real time. Sistaz Share spotlights the everyday modern woman, narrating the
  //       savvy patterns that make up the complexities other life. Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the complexities of her life. We introduce you to a
  //       digital sphere of telling the timeless chronicles of women’s lives, in real time. Sistaz Share spotlights the everyday modern woman, narrating the savvy patterns that make up the complexities other life`
  // };

  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchArticle(id);
    this.props.fetchCategories();
  }

  render() {
    const { article, categories } = this.props;

    const sideCategories = categories.map(cat => cat[0]);

    console.log(sideCategories);

    // if (!article) {
    //   console.log("loading");
    // } else {
    //   console.log(article);
    //   // console.log(article.author, article.category, article.title);
    // }

    return (
      <div className="articles">
        <Navbar whitePage={true} />

        <div className="container pt-5">
          <div className="row">
            {article ? (
              <ArticlesCardLarge
                title={article.title}
                author={article.author}
                post={article.blog_story}
                // post={post}
                time={readingTime(article.blog_story).text}
                category={getCategoryTitle(article.category)}
                // { article.img_url : }
                // img1={article.img_url} for when we getting actual images
                img1={backgroundImg}
                img2={backgroundImg2}
              />
            ) : null}
            {sideCategories ? (
              <ArticlesCardSmall sideCategories={sideCategories} />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    article: state.articles.article,
    categories: state.categories.categories
  };
};

export default connect(mapStateToProps, { fetchArticle, fetchCategories })(
  Articles
);
