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
  // post url here

  const url = `https://api-sistazshare.herokuapp.com/api/v1/service/devless/rpc?action=signUp`;

  dispatch(setAuthorsLoading());

  try {
    const res = await axios.post(url, {
      jsonrpc: "2.0",
      method: "devless",
      id: "1000",
      params: [
        authorData.email,
        authorData.password,
        null,
        null,
        authorData.first_name,
        authorData.last_name,
        null,
        [
          {
            dob: authorData.dateOfBirth,
          },
          {
            social_url: authorData.socialUrl,
          },
          {
            whatsapp: authorData.phone,
          },
          {
            bio: authorData.bio,
          },
          {
            profile_picture: authorData.profilePicture,
          },
          {
            nationality: authorData.nationality,
          },
        ],
      ],
    });

    console.log(res);

    const { token, profile } = res.data.payload.result;

    const {
      first_name,
      last_name,
      email,
      dateOfBirth,
      socialUrl,
      phone,
      bio,
      profilePicture,
      nationality,
    } = authorData;

    const authorProfile = {
      first_name,
      last_name,
      email,
      dateOfBirth,
      socialUrl,
      bio,
      phone,
      profilePicture,
      nationality,
    };

    // dispatch(setCurrentUser(profile));
    // save token to localstorage
    if (token) {
      localStorage.setItem("Auth", JSON.stringify(profile));
    }

    localStorage.setItem("sisterShareAuthFB", JSON.stringify(authorProfile));

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
  localStorage.removeItem("Auth");

  //set current user to {}
  dispatch(setCurrentUser({}));

  history.push("/");
};
