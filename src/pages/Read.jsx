import { ArticleList } from "../components/articles/ArticleList";
import React, { useContext, useEffect } from "react";
import { ArticleThumbnail } from "../components/articles/ArticleThumbnail";
import { ArticleContext } from "../providers/ArticleProvider";
import { getAllArticles } from "../apis/articlesAPI/getAllArticles";

export function Read() {
  //const articles = useContext(ArticleContext);
  const { articles, setArticles } = useContext(ArticleContext);

  useEffect(() => {
    getAllArticles(setArticles);
  }, [setArticles]);

  const articlesList = articles.map((article, index) => (
    <ArticleThumbnail key={index} article={article} />
  ));
  return (
    <div>
      <ul>{articlesList}</ul>
    </div>
  );
}
