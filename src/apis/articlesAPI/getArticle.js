import articleServer from "../articleServer";

export async function getArticle(setArticle, id) {
  try {
    const response = await articleServer.get(`/${id}`);
    console.log(response.data);
    setArticle(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching article:", error);
  }
}
