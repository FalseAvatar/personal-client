import { Link } from "react-router-dom";

export function ArticleThumbnail({ article }) {
  return (
    <>
      <Link to={`/Read/${article.article_id}`}>
        <div>
          <h3>{article.title}</h3>
          <p>{article.intro}</p>
        </div>
      </Link>
    </>
  );
}

export default ArticleThumbnail;
