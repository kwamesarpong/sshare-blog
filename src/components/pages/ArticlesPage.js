import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchAuthorArticles } from "../../actions/ArticlesAction";

import Categories from "../utils/Categories";
import Navbar from "./Navbar";

class ArticlesPage extends Component {
  componentDidMount() {
    const { name } = this.props.match.params;

    console.log(name);

    this.props.fetchAuthorArticles(name);
  }
  render() {
    const { articles } = this.props;

    console.log(articles);

    return (
      <div className="articles__page">
        <Navbar whitePage={true} />
        <div className="container py-5">
          {articles ? (
            <h2 className=" pb-5">
              Articles from{" "}
              <span className="heading heading__secondary-2 ml-2">
                {/* {" "}
                {articles[0].author}{" "} */}
              </span>
            </h2>
          ) : null}
          <div>{articles ? <Categories categories={articles} /> : null}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: state.articles.articles
  };
};

export default connect(mapStateToProps, { fetchAuthorArticles })(ArticlesPage);
