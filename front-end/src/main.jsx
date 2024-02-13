// import "./theme.css";
import "./globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FavouritesPage } from "./views/FavouritesPage/FavouritesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FavouritesPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
