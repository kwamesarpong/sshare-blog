import { FETCH_AUTHORS } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: payload
      };
    default:
      return state;
  }
}
