import React from 'react'
import App from '../App';
import Home from '../pages/Home';
import {
    createBrowserRouter,
  } from "react-router-dom";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[{
        path: '/',
        element: <Home />
      }

      ]
    },
  ]);

 