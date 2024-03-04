import { ArticleContext } from "../../providers/ArticleProvider";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";

export function Article() {
  const { id } = useParams();
  const { articles } = useContext(ArticleContext);
  const article = articles[id - 2];

  return (
    <div>
      <h1>{article.title}</h1>
      <h3>{article.intro}</h3>
      <p>{article.article}</p>
    </div>
  );
}

export default Article;
