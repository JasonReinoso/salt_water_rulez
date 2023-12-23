import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PersistLogin from './components/Auth_Componets/Login/PersistLogin.js';
import reportWebVitals from './reportWebVitals';
import Regulations from './components/Regulation_components/Regulations';
import Log from './components/Log_components/Log';
import Register from './components/Auth_Componets/Register/Register.js'
import Login from './components/Auth_Componets/Login/Login.js';
import RequireAuth from './components/Auth_Componets/Login/RequireAuth.js';
import Testjwttoken from './components/tests/Testjwttoken.js';
import Home from './components/home_components/Home.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './components/Auth_Componets/Auth_State/AuthProvider.js';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App/>,
  // },

  {
    element: <PersistLogin/>,
    children:[
      {
        element: <RequireAuth/>,
        children:[
          {
            path: "/Log",
            element:<Log/>
          },
          {
            path: "/Regulations",
            element: <Regulations/>,
          },
          {
            path:"/Home",
            element:<Home/>
            
          },
          {
            path: "/",
            element: <App/>,
          }
        ]
      }
      
    ]
  },
  {
    path:"/Register",
    element: <Register/>
  },
  {
    path:"/Login",
    element:<Login/>
  }
  ,
  {
    path:"/Testjwttoken",
    element:  <Testjwttoken/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
