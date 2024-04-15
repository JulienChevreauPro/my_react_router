import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import './index.css';

import Home from "./pages/Home.jsx";
import About from "./pages/about.jsx";
import Article from './pages/Articles.jsx';

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
      {
        path:"/articles/:id",
        element:<Article/>,
      },
    ],
  },
]);
    

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
