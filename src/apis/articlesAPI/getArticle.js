import articleServer from "../articleServer";

export async function getArticle(article, setArticle, id) {
  try {
    const response = await articleServer.get(`/${id}`);
    console.log(response.data);
    setArticle(response.data);
  } catch (error) {
    console.error("Error fetching article:", error);
  }
}