import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../apis/articlesAPI/getArticle";

export function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState({});
  //const article = articles[id - 2];
  useEffect(() => {
    getArticle(setArticle, id);
    return () => {
      setArticle({});
    };
  }, [setArticle, id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <h3>{article.intro}</h3>
      <p>{article.article}</p>
    </div>
  );
}

export default Article;
