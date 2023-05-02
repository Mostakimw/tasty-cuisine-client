import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Info from "../pages/Info/Info";
import Special from "../pages/Special/Special";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
// import Error from "../pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: <ChefDetails></ChefDetails>,
        loader: ({ params }) =>
          fetch(
            `https://taste-cuisine-server-mostakimw.vercel.app/chefs/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
