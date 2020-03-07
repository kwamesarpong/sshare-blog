import axios from "axios";
import { FETCH_ARTICLE, FETCH_AUTHOR_ARTICLES } from "./types";

axios.defaults.headers.common["Devless-token"] =
  "ecdc2527d340c7ecc4056cc1db6f6a51";

export const fetchArticle = articleId => async dispatch => {
  const url = `http://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=id,${articleId}`;

  try {
    const res = await axios.get(url);

    const article = res.data.payload.results[0];

    dispatch({ type: FETCH_ARTICLE, payload: article });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAuthorArticles = authorName => async dispatch => {
  // const url = `http://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=author,${authorName}`;
  // const url = `http://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=author,${"Bibi Trap"}`;
  const url = `http://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts`;

  try {
    const res = await axios.get(url);

    const articles = res.data.payload.results;

    dispatch({ type: FETCH_AUTHOR_ARTICLES, payload: articles });
  } catch (error) {
    console.log(error);
  }
};
