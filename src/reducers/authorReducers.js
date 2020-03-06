import { FETCH_AUTHORS, FETCH_AUTHOR } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    case FETCH_AUTHOR:
      return {
        ...state,
        author: payload
      };

    default:
      return state;
  }
}
