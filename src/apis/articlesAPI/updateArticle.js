import articleServer from "../articleServer";

export async function updateArticle(id, data) {
  try {
    await articleServer.put(`/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error posting article:", error);
  }
}

export default updateArticle;
