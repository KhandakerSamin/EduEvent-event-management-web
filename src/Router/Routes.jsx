import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Others/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";
import Career from "../Pages/Others/Career";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('/data.json')
        },
        {
            path:'/blog',
            element:<PrivateRoute><Blog></Blog></PrivateRoute>
        },
        {
            path:'/career',
            element:<PrivateRoute><Career></Career></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/details/:id',
            element:<PrivateRoute><Details></Details></PrivateRoute>,
            loader: () => fetch('/data.json')
        }
      ]
    },
  ]);

  export default router ;