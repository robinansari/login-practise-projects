import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Root/MainLayout';
import Home from './Pages/Home/Home';
import Registration from './Pages/Register/Registration';
import Login from './Pages/Login/Login';
import AuthContext from './Provider/AuthContext';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:([
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ])
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthContext>
   <RouterProvider router={router}>
    </RouterProvider>
   </AuthContext>
  </React.StrictMode>,
)
