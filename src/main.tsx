import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import SignUp from './pages/auth/SignUp';

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthLayout/>,
    children: [
      {
        path: 'signup',
        element: <SignUp/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
