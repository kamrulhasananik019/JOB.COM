import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Body from './Components/Head/Head';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import CartView from './Components/Cart/CartView';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ()=>fetch('fake.json')
      },
   {
    path:'CartView/:id',
    element: <CartView></CartView>
   }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
