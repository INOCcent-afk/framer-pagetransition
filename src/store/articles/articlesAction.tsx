import { Dispatch } from "react";
import { ArticleAction } from "./articlesTypes";

export const loadArticles = () => async (dispatch: Dispatch<ArticleAction>) => {
  dispatch({
    type: "GET_ARTICLES",
  });
};
