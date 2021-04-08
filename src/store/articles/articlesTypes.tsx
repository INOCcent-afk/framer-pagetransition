export interface ArticleState {
  articles: ArticleInfoState[];
}

export interface ArticleInfoState {
  title: string;
  date: string;
  image: string;
  desc: string[];
  id: number;
}

export type ArticleAction = {
  type: "GET_ARTICLES";
};

export type Action = ArticleAction;
