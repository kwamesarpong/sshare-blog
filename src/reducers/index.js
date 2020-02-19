import { combineReducers } from "redux";
import categoriesReducer from "./categoryReducers";

export default combineReducers({
  // stories: stories
  categories: categoriesReducer
});
