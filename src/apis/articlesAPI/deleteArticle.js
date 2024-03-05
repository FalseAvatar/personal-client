import articleServer from "../articleServer";

export async function deleteArticle(id) {
  try {
    await articleServer.delete(`/${id}`);
  } catch (error) {
    console.error("Error posting article:", error);
  }
}
