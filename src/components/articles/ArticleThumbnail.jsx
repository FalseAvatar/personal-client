import { Link, useNavigate } from "react-router-dom";
import { deleteArticle } from "../../apis/articlesAPI/deleteArticle";
import { useContext } from "react";
import { ArticleContext } from "../../providers/ArticleProvider";

export function ArticleThumbnail({ article }) {
  const { articles, setArticles } = useContext(ArticleContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    navigate(`/Read/${article.article_id}/Update`);
  };

  const handleDelete = (e) => {
    deleteArticle(article.article_id);
    setArticles(
      articles.filter(
        (articleItem) => articleItem.article_id !== article.article_id
      )
    );
  };

  return (
    <>
      <Link to={`/Read/${article.article_id}`}>
        <div>
          <h3>{article.title}</h3>
          <p>{article.intro}</p>
        </div>
      </Link>
      <button onClick={(e) => handleUpdate(e, article.article_id)}>
        Update
      </button>
      <button onClick={(e) => handleDelete(e, article.article_id)}>
        Delete
      </button>
    </>
  );
}

export default ArticleThumbnail;
