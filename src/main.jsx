import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Logements from './pages/logements/Logements.jsx';
import './main.css'
import About from './pages/about/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Error404</div>,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <div>Error404</div>,
  }
  ,
  {
    path: "/logements",
    element: <Logements />,
    errorElement: <div>Error404</div>,
  }
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
