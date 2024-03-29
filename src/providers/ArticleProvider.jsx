import { createContext, useState } from "react";

export const ArticleContext = createContext(null);

export function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState([]);
  return (
    <ArticleContext.Provider
      value={{ articles, setArticles, article, setArticle }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

export default ArticleProvider;

// const articles = [
//   {
//     id: 1,
//     title: "TITLE",
//     intro: "introduction",
//     article:
//       "sgvajbhkavk sadf hashf us sh hs ahfl s dhflsfhus hfsnv.snvaewqj[jsa fsakcanvlkanv,sd,nckjsd bdvf  df bvklzs vnsad kdsk hkdsh vsdhviqwp  h[fw[s  qnwnfqn weqnrekjgn ,mnb.zxbjzfjngkafng,axjch gwerhg dz.f,bn",
//   },
//   {
//     id: 2,
//     title: "TITLE2",
//     intro: "introduction",
//     article:
//       "sgvajbhkavk sadf hashf us sh hs ahfl s dhflsfhus hfsnv.snvaewqj[jsa fsakcanvlkanv,sd,nckjsd bdvf  df bvklzs vnsad kdsk hkdsh vsdhviqwp  h[fw[s  qnwnfqn weqnrekjgn ,mnb.zxbjzfjngkafng,axjch gwerhg dz.f,bn",
//   },
//   {
//     id: 3,
//     title: "TITLE3",
//     intro: "introduction",
//     article:
//       "sgvajbhkavk sadf hashf us sh hs ahfl s dhflsfhus hfsnv.snvaewqj[jsa fsakcanvlkanv,sd,nckjsd bdvf  df bvklzs vnsad kdsk hkdsh vsdhviqwp  h[fw[s  qnwnfqn weqnrekjgn ,mnb.zxbjzfjngkafng,axjch gwerhg dz.f,bn",
//   },
// ];
