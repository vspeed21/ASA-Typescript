import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import SavePassword from './pages/auth/SavePassword';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: 'signup',
        element: <SignUp/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword/>
      },
      {
        path: 'save-password/:token',
        element: <SavePassword/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
