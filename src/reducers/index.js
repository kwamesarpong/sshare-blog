import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducers";
import articleReducers from "./articleReducers";
import authorReducers from "./authorReducers";

export default combineReducers({
  // stories: stories
  categories: categoriesReducer,
  articles: articleReducers,
  authors: authorReducers
});
