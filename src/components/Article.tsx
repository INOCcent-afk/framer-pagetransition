import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface ArticleProps {
  title: string;
  date: string;
  image: string;
  desc: string;
  path: number;
  order: number;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  date,
  image,
  desc,
  path,
  order,
}) => {
  return (
    <ArticleContainer>
      <p className="order">{order < 10 ? `0${order}.` : `${order}.`}</p>
      <Link to={`/articleDetail/${path}`}>
        <img src={image} alt={title} />
      </Link>
      <h1>{title}</h1>
      <span>{date}</span>
      <p className="desc">{desc}</p>
    </ArticleContainer>
  );
};

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 50px;

  h1 {
    font-size: 24px;
    font-family: sans-serif;
    margin: 10px 0;
  }
  img {
    width: 100%;
    margin: 10px 0;
  }
  span {
    margin: 5px 0;
  }
  .desc {
    font-weight: normal;
    font-family: "Roboto", sans-serif;
  }
`;
