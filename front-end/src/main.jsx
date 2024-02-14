// import "./theme.css";
import "./globals.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProductListPage } from "./views/ProductListPage/ProductListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
