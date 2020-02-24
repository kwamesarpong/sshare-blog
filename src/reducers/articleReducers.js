import { FETCH_ARTICLE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ARTICLE:
      console.log(payload);
      return {
        ...state,
        articles: payload
      };
    default:
      return state;
  }
}
