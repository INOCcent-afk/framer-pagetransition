import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { loadArticles } from "../store/articles/articlesAction";
import { ArticleState } from "../store/articles/articlesTypes";
import { Article } from "./Article";
import styled from "styled-components";

export const Content: React.FC = () => {
  const dispatch = useDispatch();

  const articles = useSelector<AppState, ArticleState["articles"]>(
    (state) => state.articleReducer.articles
  );

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <ContentContainer>
      {articles.map((article) => (
        <Article
          title={article.title}
          date={article.date}
          image={article.image}
          desc={article.desc}
          key={article.id}
          path={article.id}
        />
      ))}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  max-width: 800px;
  img {
    width: 350px;
    height: 500px;
    object-fit: cover;
  }
`;
