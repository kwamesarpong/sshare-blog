import axios from "axios";
import { FETCH_AUTHORS } from "./types";

axios.defaults.headers.common["Devless-token"] =
  "ecdc2527d340c7ecc4056cc1db6f6a51";

export const fetchAuthors = () => async dispatch => {
  const url = `http://api-sistazshare.herokuapp.com/api/v1/service/stories/db?table=author`;

  try {
    const res = await axios.get(url);

    const authors = res.data.payload.results;

    dispatch({ type: FETCH_AUTHORS, payload: authors });

    console.log(authors);
  } catch (error) {
    console.log(error);
  }
};
