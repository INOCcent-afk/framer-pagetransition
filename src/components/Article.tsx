import React from "react";

interface ArticleProps {
  title: string;
  date: string;
  image: string;
  desc: string[];
}

export const Article: React.FC<ArticleProps> = ({
  title,
  date,
  image,
  desc,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <span>{date}</span>
      <img src={image} alt={title} />
      <p>{desc}</p>
    </>
  );
};
