import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/About";
import { Read } from "./pages/Read";
import { Write } from "./pages/Write";
import { Article } from "./components/articles/Article";
import { LogIn } from "./pages/LogIn";
import { App } from "./App";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Read",
        element: <Read />,
      },
      {
        path: "Read/:id",
        element: <Article />,
      },

      {
        path: "/Write",
        element: <Write />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
    ],
  },
]);

export default router;
