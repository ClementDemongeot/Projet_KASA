import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Logements from "./pages/logements/Logements.jsx";
import "./main.css";
import About from "./pages/about/About.jsx";
import Error404 from "./pages/Error/Page404.jsx";
import LogementsData from "./assets/logements.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error404 />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error404 />,
  },

  {
    path: "/logements/:id",
    element: <Logements />,
    errorElement: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
