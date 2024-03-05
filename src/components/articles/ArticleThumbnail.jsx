import { Link, useNavigate } from "react-router-dom";

export function ArticleThumbnail({ article }) {
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    navigate(`/Read/${article.article_id}/Update`);
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
    </>
  );
}

export default ArticleThumbnail;
