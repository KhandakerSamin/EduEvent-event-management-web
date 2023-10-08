import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Others/Blog";
import About from "../Pages/Others/About";
import Services from "../Pages/Others/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import PrivateRoute from "./PrivateRoute";


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
            path:'/about',
            element:<About></About>
        },
        {
            path:'/services',
            element:<Services></Services>
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