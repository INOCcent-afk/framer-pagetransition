import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { AppState } from "../store";
import { ArticleState } from "../store/articles/articlesTypes";

interface ArticleDetailProps {
  match: { params: { id: string } };
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({ match }) => {
  const articleID = parseInt(match.params.id);

  const articles = useSelector<AppState, ArticleState["articles"]>(
    (state) => state.articleReducer.articles
  );

  return (
    <>
      {articles
        .filter((article) => article.id === articleID)
        .map((filteredArticle) => (
          <Container key={filteredArticle.id}>
            <h1>{filteredArticle.title}</h1>
            <span>{filteredArticle.date}</span>
            <img src={filteredArticle.image} alt={filteredArticle.title} />
            <p>{filteredArticle.desc}</p>
            <p>{filteredArticle.details[0]}</p>
            <p>{filteredArticle.details[1]}</p>
          </Container>
        ))}
      <h1>EELLO</h1>
    </>
  );
};

const Container = styled.div`
  p {
    margin: 10px 0;
  }
`;
