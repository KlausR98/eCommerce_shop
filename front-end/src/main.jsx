import "./globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { ProductDetailsPage } from "./views/ProductDetailsPage/ProductDetailsPage";
import { MainPage } from "./views/MainPage/MainPage";
import { CartPage } from "./views/CartPage/CartPage";
import { FavouritesPage } from "./views/FavouritesPage/FavouritesPage";
// import { ProductListPage } from "./views/ProductListPage/ProductListPage";
import { Layout } from "./components/Layout/Layout";
import { mainPageLoader } from "./api/MainPageLoader";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <CartPage />,
      },
      {
        path: "/ulubione",
        element: <FavouritesPage />,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
