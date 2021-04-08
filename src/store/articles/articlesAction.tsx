import { Dispatch } from "react";
import { Action } from "./articlesTypes";

export const loadArticles = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: "GET_ARTICLES",
  });
};
