import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Categories from "../Pages/Categories/Categories";
import News from "../Pages/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/category/:id",
    element: <Categories></Categories>,
  },
  {
    path: "/news/:id",
    element: <News></News>,
  },
]);
