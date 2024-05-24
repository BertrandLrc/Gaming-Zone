import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Catalog from "./pages/Catalog";
import Article from "./pages/Article";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/",
    element: <Catalog />,
  },
  {
    path: "/articles/:id",
    element: <Article />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `http://localhost:3310/api/games/${params.id}`
      );
      return res.data;
    },
  },
  {
    path: "/Panier",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
