import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';

import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/About",
        element:<About/>,
      },
    ],
  },
]);
    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
