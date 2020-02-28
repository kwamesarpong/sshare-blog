import { FETCH_ARTICLE, FETCH_AUTHOR_ARTICLES } from "../actions/types";

const initialState = {
  // articles: [],
  // article: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ARTICLE:
      return {
        ...state,
        article: payload
      };
    case FETCH_AUTHOR_ARTICLES:
      return {
        ...state,
        articles: payload
      };
    default:
      return state;
  }
}
