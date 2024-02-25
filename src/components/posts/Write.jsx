import { useForm, submitHandler } from "react-form-hook";

export function Write() {
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
          ></input>
          <label for="intro">Article descritpion</label>
          <input
            name="intro"
            id="intro"
            className="new_article-intro"
            type="textarea"
          ></input>
          <label for="article">Article</label>
          <input
            name="article"
            id="article"
            className="new_article-article"
            type="textarea"
          ></input>
        </fieldset>
      </form>
    </div>
  );
}

export default Write;
