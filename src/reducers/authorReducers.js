import {
  FETCH_AUTHORS,
  FETCH_AUTHOR,
  FETCH_AUTHOR_FACEBOOK,
  SET_CURRENT_USER,
  AUTHOR_LOADING,
} from "../actions/types";

const initialState = {
  authors: [],
  author: {},
  loading: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case AUTHOR_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        author: payload,
        loading: false,
      };
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: payload,
        loading: false,
      };
    case FETCH_AUTHOR:
      return {
        ...state,
        author: payload,
        loading: false,
      };
    case FETCH_AUTHOR_FACEBOOK:
      return {
        ...state,
        author: payload,
        loading: false,
      };

    default:
      return state;
  }
}
