import axios from "axios";

import {
  FETCH_AUTHORS,
  FETCH_AUTHOR,
  FETCH_AUTHOR_FACEBOOK,
  SET_CURRENT_USER,
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

    console.log(res.data.payload);
    console.log(author);

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

export const createAuthorProfile = (authorData, history) => async (
  dispatch
) => {
  const url = `http://api-sistazshare.herokuapp.com/api/v1/service/stories/db`;

  dispatch(setAuthorsLoading());

  try {
    const res = await axios.post(url, {
      resource: [
        {
          name: "author",
          field: [
            {
              whatsapp_number: authorData.phone,
              social_url: authorData.socialUrl,
              last_name: authorData.last_name,
              first_name: authorData.first_name,
              bio: authorData.bio,
              author_img: authorData.profilePicture,
              location: authorData.nationality,
              name: `${authorData.first_name} ${authorData.last_name}`,
              email: authorData.email,
            },
          ],
        },
      ],
    });

    console.log(res);

    const authorId = res.data.payload.entry_id;

    // dispatch(setCurrentUser(profile));

    // save token to localstorage

    localStorage.setItem("sisterShareAuth", JSON.stringify(authorId));

    history.push("/");
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

export const setCurrentUser = (token) => {
  return {
    type: SET_CURRENT_USER,
    payload: token,
  };
};

export const logoutUser = (history) => (dispatch) => {
  //Remove token from localStorage

  localStorage.removeItem("sisterShareAuth");

  //set current user to {}
  dispatch(setCurrentUser({}));

  history.push("/");
};
