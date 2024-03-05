import React, { useEffect, useState } from "react";
import { updateArticle } from "../apis/articlesAPI/updateArticle";
import { getArticle } from "../apis/articlesAPI/getArticle";
import { useNavigate, useParams } from "react-router-dom";

export function UpdateArticle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [originalArticle, setOriginialArticle] = useState("");
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArticle(setArticle, id);
      if (response) {
        console.log(response.title);
        console.log(response.intro);
        console.log(response.article);
        setTitle(response.title);
        setIntro(response.intro);
        setOriginialArticle(response.article);
      }
    };
    fetchData();
  }, [id]);

  //const updateData = { title, intro, originalArticle };

  const handleSubmit = async (data) => {
    await updateArticle(id, data);
    navigate(`/Read/${id}`);
  };

  return (
    <div>
      <form
        className="NewArticleForm"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({ title, intro, article: originalArticle });
        }}
      >
        <fieldset>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            //value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            id="title"
            className="new_article-title"
            type="text"
          ></input>
          <label htmlFor="intro">Article descritpion</label>
          <input
            value={intro}
            //value={intro}
            onChange={(e) => setIntro(e.target.value)}
            name="intro"
            id="intro"
            className="new_article-intro"
            type="textarea"
          ></input>
          <label htmlFor="article">Article</label>
          <input
            value={originalArticle}
            //value={article}
            onChange={(e) => setOriginialArticle(e.target.value)}
            name="article"
            id="article"
            className="new_article-article"
            type="textarea"
          ></input>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateArticle;
