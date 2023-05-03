import React, { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
// import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Info from "../pages/Info/Info";
import Special from "../pages/Special/Special";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import ChefDetails from "../pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/Loading/Loading";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
// import Error from "../pages/Error/Error";

const LazyHome = lazy(() => import("../pages/Home/Home"));

const LazyChefDetails = lazy(() => import("../pages/ChefDetails/ChefDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <LazyHome></LazyHome>
          </Suspense>
        ),
        loader: () =>
          fetch(`https://taste-cuisine-server-mostakimw.vercel.app/chefs`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/info",
        element: <Info></Info>,
      },
      {
        path: "/special",
        element: <Special></Special>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "chefs/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <PrivateRoute>
              <LazyChefDetails></LazyChefDetails>
            </PrivateRoute>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(
            `https://taste-cuisine-server-mostakimw.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
