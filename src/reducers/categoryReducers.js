import {
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  CATEGORY_LOADING
} from "../actions/types";

const initialState = {
  categories: [],
  category: [],
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        category: payload,
        loading: false
      };
    default:
      return state;
  }
}
