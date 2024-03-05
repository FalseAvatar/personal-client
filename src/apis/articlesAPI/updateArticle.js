import articleServer from "../articleServer";

export async function updateArticle(id, data) {
  const newArticle = {
    title: data.title,
    intro: data.intro,
    article: data.article,
  };
  try {
    await articleServer.put(`/${id}`, newArticle);
  } catch (error) {
    console.error("Error posting article:", error);
  }
}

export default updateArticle;
