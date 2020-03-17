import { FETCH_CATEGORIES, FETCH_CATEGORY } from "../actions/types";

const initialState = {
  categories: [],
  category: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: payload
      };
    case FETCH_CATEGORY:
      return {
        ...state,
        category: payload
      };
    default:
      return state;
  }
}
