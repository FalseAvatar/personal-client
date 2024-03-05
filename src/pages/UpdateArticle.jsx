import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { updateArticle } from "../apis/articlesAPI/updateArticle";
import { getArticle } from "../apis/articlesAPI/getArticle";
import { useNavigate, useParams } from "react-router-dom";

export function UpdateArticle() {
  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  // const [title, setTitle] = useState("");
  // const [intro, setIntro] = useState("");
  const [article, setArticle] = useState("");

  useEffect(() => {
    getArticle(setArticle, id).then({
      if(article) {
        setValue("title", article.title);
        setValue("intro", article.intro);
        setValue("article", article.article);
      },
    });
  }, [id, setValue]);

  const onSubmit = (data, e) => {
    updateArticle(id, data);
    navigate(`/Read/${id}`);
  };

  return (
    <div>
      <form className="NewArticleForm">
        <fieldset>
          <label for="title">Title</label>
          <input
            defaultValue={article.title}
            //value={title}
            onChange={(e) => setValue("title", e.target.value)}
            name="title"
            id="title"
            className="new_article-title"
            type="text"
            {...register("title")}
          ></input>
          <label for="intro">Article descritpion</label>
          <input
            defaultValue={article.intro}
            //value={intro}
            onChange={(e) => setValue("intro", e.target.value)}
            name="intro"
            id="intro"
            className="new_article-intro"
            type="textarea"
            {...register("intro")}
          ></input>
          <label for="article">Article</label>
          <input
            defaultValue={article.article}
            //value={article}
            onChange={(e) => setValue("article", e.target.value)}
            name="article"
            id="article"
            className="new_article-article"
            type="textarea"
            {...register("article")}
          ></input>
        </fieldset>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateArticle;
