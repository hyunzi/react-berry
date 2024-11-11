import React from 'react';
import MinimalLayout from '@/layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = React.lazy(() => import('@/views/pages/authentication3/Login3'));
const AuthRegister3 = React.lazy(() => import('@/views/pages/authentication3/Register3'));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/login3',
      element: <AuthLogin3 />
    },
    {
      path: '/pages/register/register3',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;