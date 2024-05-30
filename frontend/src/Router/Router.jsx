import {createBrowserRouter,  RouterProvider,
  } from "react-router-dom";
import App from "../App.jsx";
import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        { path:"/",element:<Home/>},
        { path:"/about",element:<About/>},
      ]
    },
  ]);

  export default router;