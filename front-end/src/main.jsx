import "./globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductDetailsPage } from "./views/ProductDetailsPage/ProductDetailsPage";
import { MainPage } from "./views/MainPage/MainPage";
import { CartPage } from "./views/CartPage/CartPage";
import { FavouritesPage } from "./views/FavouritesPage/FavouritesPage";
import { Layout } from "./components/Layout/Layout";
import { mainPageLoader } from "./api/mainPageLoader";
import { ProductListPage } from "./views/ProductListPage/ProductListPage";
import { productListLoader } from "./api/productListLoader";
import { productLoader } from "./api/productLoader";
import { addProductsToFavouritesAction } from "./api/addProductsToFavouritesAction";
import { favouritesLoader } from "./api/favouritesLoader";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction";
import { deleteProductAction } from "./api/deleteProductAction";

const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductsToFavouritesAction,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "/delete-from-cart/:productId",
    action: deleteProductAction,
  },
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
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subCategory?",
        element: <ProductListPage />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subCategory/:productId",
        element: <ProductDetailsPage />,
        loader: productLoader,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
