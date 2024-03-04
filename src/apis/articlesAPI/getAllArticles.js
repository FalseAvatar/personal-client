import articleServer from "../articleServer";
import { ArticleContext } from "../../providers/ArticleProvider";
import { useContext } from "react";

export async function getAllArticles(setArticles) {
  try {
    const response = await articleServer.get("/");
    console.log(response);
    setArticles(response.data);
  } catch (error) {
    console.error("Error fetching articlees:", error);
  }
}
