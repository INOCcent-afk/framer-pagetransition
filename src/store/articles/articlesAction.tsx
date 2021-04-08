import { Dispatch } from "react";
import { Action } from "./articlesTypes";

export const getMovies = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: "GET_ARTICLES",
  });
};
