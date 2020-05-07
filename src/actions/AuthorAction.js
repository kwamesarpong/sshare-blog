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

  const url = `https://api-sistazshare.herokuapp.com/api/v1/service/devless/rpc?action=signUp`;

  try {
    axios.post(url, {
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
            social_url: authorData.social_url,
          },
          {
            whatsapp: authorData.whatsapp_no,
          },
          {
            bio: authorData.bio,
          },
          {
            profile_picture: authorData.profile_picture,
          },
          {
            nationality: authorData.nationality,
          },
        ],
      ],
    });
  } catch (error) {
    console.log(error);
  }

  // {
  //       jsonrpc: "2.0",
  //       method: "devless",
  //       id: "1000",
  //       params: [
  //         email,
  //         password,
  //         null,
  //         null,
  //         first_name,
  //         last_name,
  //         null,
  //         [
  //           {
  //             dob: dateOfBirth
  //           },
  //           {
  //             social_url: social_url
  //           },
  //           {
  //             whatsapp: whatsapp_no
  //           },
  //           {
  //             bio: bio
  //           },
  //           {
  //             profile_picture: profile_picture
  //           },
  //           {
  //             nationality: nationality
  //           }
  //         ]
  //       ]
  //     }

  // try {
  //   // const res a
  // } catch (error) {
  //   console.log(error);
  // }
};

// Set loading state
export const setAuthorsLoading = () => {
  return {
    type: AUTHOR_LOADING,
  };
};
