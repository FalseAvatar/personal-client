import { ArticleList } from "../components/articles/ArticleList";
import React, { useContext } from "react";
import { ArticleThumbnail } from "../components/articles/ArticleThumbnail";
import { ArticleContext } from "../providers/ArticleProvider";

export function Read() {
  const articles = useContext(ArticleContext);
  const articlesList = articles.map((article) => (
    <ArticleThumbnail article={article} />
  ));
  return (
    <div>
      <ul>{articlesList}</ul>
    </div>
  );
}
