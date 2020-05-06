import axios from "axios";
import {
  FETCH_AUTHORS,
  FETCH_AUTHOR,
  FETCH_AUTHOR_FACEBOOK,
  AUTHOR_LOADING,
} from "./types";

axios.defaults.headers.common["Devless-token"] =
  "ecdc2527d340c7ecc4056cc1db6f6a51";

export const fetchAuthors = () => async (dispatch) => {
  const url = `https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=author`;

  dispatch(setAuthorsLoading());

  try {
    const res = await axios.get(url);

    const authors = res.data.payload.results;

    dispatch({ type: FETCH_AUTHORS, payload: authors });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAuthor = (authorId) => async (dispatch) => {
  // const url = `https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=author&where=id,1`;
  const url = `https://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=author&where=id,${authorId}`;

  dispatch(setAuthorsLoading());

  try {
    const res = await axios.get(url);

    const author = res.data.payload.results[0];

    dispatch({ type: FETCH_AUTHOR, payload: author });
  } catch (error) {
    console.log(error);
  }
};

export const fetchAuthorFromFacebook = (userData) => async (dispatch) => {
  dispatch(setAuthorsLoading());

  try {
    dispatch({ type: FETCH_AUTHOR_FACEBOOK, payload: userData });
  } catch (error) {
    console.log(error);
  }
};

export const createAuthorProfile = (authorData) => async (dispatch) => {
  // post url here

  dispatch(setAuthorsLoading());

  try {
    // const res a
  } catch (error) {
    console.log(error);
  }
};

// Set loading state
export const setAuthorsLoading = () => {
  return {
    type: AUTHOR_LOADING,
  };
};
