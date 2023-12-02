import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Regulations from './components/Regulation_components/Regulations';
import Log from './components/Log_components/Log';
import Register from './components/Auth_Componets/Register/Register.js'
import Login from './components/Auth_Componets/Login/Login.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Regulations",
    element: <Regulations/>,
  },
  {
    path: "/Log",
    element: <Log/>,
  },
  {
    path:"/Register",
    element: <Register/>
  },
  {
    path:"/Login",
    element:<Login/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
