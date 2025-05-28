import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/Provider/AuthProvider';
import Brands from './components/Brands/Brands';
import Brand from './components/Brand/Brand';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyProfile from './components/MyProfile/MyProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/brands',
        element: <Brands></Brands>,
      },
      {
        path: '/brand/:id',
        element: <PrivateRoute>
          <Brand></Brand>
        </PrivateRoute>,
        loader: () => fetch('/CouponsData.json'),
      },
      {
        path: '/my-profile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>
      }

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
