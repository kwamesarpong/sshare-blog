import axios from "axios";
import { FETCH_CATEGORIES, FETCH_CATEGORY } from "./types";

axios.defaults.headers.common["Devless-token"] =
  "ecdc2527d340c7ecc4056cc1db6f6a51";

const URLS = {
  mindBody:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,mindnbody&size=4",
  loveSexRelationships:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,lovesexrelationships&size=4",
  motivation:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,motivationinspiration&size=4",
  money:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,money&size=4",
  feminism:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,feminism&size=4",
  lifestyleCulture:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,lifestyleculture&size=4",
  news:
    "https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,news&size=4"
};

export const fetchCategories = () => async dispatch => {
  // axios.defaults.headers.common["Devless-token"] =
  //   "ecdc2527d340c7ecc4056cc1db6f6a51";

  try {
    // const res = await axios.get(mindBodyUrl);
    const res = await axios.all([
      axios.get(URLS.mindBody),
      axios.get(URLS.loveSexRelationships),
      axios.get(URLS.lifestyleCulture),
      axios.get(URLS.motivation),
      axios.get(URLS.money),
      axios.get(URLS.feminism),
      axios.get(URLS.news)
    ]);

    const categories = res.map(category => {
      return category.data.payload.results;
    });

    console.log(categories, "categories list");

    dispatch({ type: FETCH_CATEGORIES, payload: categories });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategory = category => async dispatch => {
  const url = `https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=blog_posts&where=category,${category}`;

  try {
    const res = await axios.get(url);

    dispatch({ type: FETCH_CATEGORY, payload: res.data.payload.results });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
