import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducers";
import articleReducers from "./articleReducers";

export default combineReducers({
  // stories: stories
  categories: categoriesReducer,
  articles: articleReducers
});
