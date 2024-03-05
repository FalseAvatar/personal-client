import { useForm } from "react-hook-form";
import React from "react";
import { addArticle } from "../apis/articlesAPI/addArticle";
import { useNavigate } from "react-router-dom";

export function Write() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data, e) => {
    addArticle(data);
    navigate("/Read/");
  };

  return (
    <div>
      <form className="NewArticleForm">
        <fieldset>
          <label for="title">Title</label>
          <input
            name="title"
            id="title"
            className="new_article-title"
            type="text"
            {...register("title")}
          ></input>
          <label for="intro">Article descritpion</label>
          <input
            name="intro"
            id="intro"
            className="new_article-intro"
            type="textarea"
            {...register("intro")}
          ></input>
          <label for="article">Article</label>
          <input
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

export default Write;
