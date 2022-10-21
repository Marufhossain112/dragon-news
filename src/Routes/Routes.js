import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/category/:id",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      // {
      //   path: "/news/:id",
      //   element: <News></News>,
      // },
    ],
  },
]);
