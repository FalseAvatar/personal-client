import { createBrowserRouter } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { About } from "./components/About";
import { Read } from "./components/posts/Read";
import { Write } from "./components/posts/Write";
import { LogIn } from "./auth/LogIn";
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
