import React from "react";
import { Link } from "react-router-dom";

interface ArticleProps {
  title: string;
  date: string;
  image: string;
  desc: string;
  path: number;
}

export const Article: React.FC<ArticleProps> = ({
  title,
  date,
  image,
  desc,
  path,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <Link to={`/articleDetail/${path}`}>
        <img src={image} alt={title} />
      </Link>
      <p>{desc}</p>
    </>
  );
};
