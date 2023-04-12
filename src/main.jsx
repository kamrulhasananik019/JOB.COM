import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Body from './Components/Head/Head';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import CartView from './Components/Cart/CartView';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import Statistics from './Components/Statistics/Statistics';
import Head2 from './Components/Head2/Head2';
import ErrorPage from './Components/Error/Error';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/fake.json')
      },
  
      {
        path: 'CartView/:id',
        element: <CartView></CartView>
      }, {
        path: '/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/fake.json')
      },
      {
      path:'/Blog',
      element:<Blog></Blog>
      },
      {
        path:'/Statistics',
        element:<Statistics></Statistics>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
