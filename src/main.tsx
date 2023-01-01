import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import ForgotPassword from './pages/auth/ForgotPassword';
import SavePassword from './pages/auth/SavePassword';
import Confirm from './pages/auth/Confirm';

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
        path: 'confirm/:token',
        element: <Confirm/>
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
  <RouterProvider router={router}/>
)
