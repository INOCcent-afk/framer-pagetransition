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
            <div className="title">
              <span>{filteredArticle.date}</span>
              <h1>{filteredArticle.title}</h1>
            </div>
            <img src={filteredArticle.image} alt={filteredArticle.title} />
            <div className="descriptions">
              <p>{filteredArticle.desc}</p>
              <p>{filteredArticle.details[0]}</p>
              <p>{filteredArticle.details[1]}</p>
            </div>
          </Container>
        ))}
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  color: #fff;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
  }
  .title {
    display: flex;
    flex-direction: column;
    max-width: 800px;
    margin: 20px auto;
  }
  span {
    font-weight: bold;
  }

  p,
  h1,
  span {
    margin: 10px;
  }
  .descriptions {
    max-width: 600px;
    margin: 30px auto;
  }

  @media only screen and (min-width: 768px) {
    .title {
      margin: 100px auto;
    }

    h1 {
      font-size: 64px;
    }
    .descriptions {
      margin: 100px auto;
    }
    p {
      font-size: 20px;
      line-height: 40px;
    }
  }
`;
