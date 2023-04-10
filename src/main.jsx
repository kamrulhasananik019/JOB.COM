import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Body from './Components/Head/Head';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
