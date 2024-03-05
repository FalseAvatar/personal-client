import articleServer from "../articleServer";

export async function addArticle(data) {
  const newArticle = {
    title: data.title,
    intro: data.intro,
    article: data.article,
  };
  try {
    await articleServer.post(`/`, newArticle);
  } catch (error) {
    console.error("Error posting article:", error);
  }
}
