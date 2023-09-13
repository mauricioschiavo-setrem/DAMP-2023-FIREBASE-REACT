import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CreateAccountPage } from './pages/CreateAccountPage';
import { HomePage } from './pages/HomePage';
import { LoggedPage } from './pages/Logged';
import { LoginPage } from './pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/criar-conta',
    element: <CreateAccountPage />,
  },
  {
    path: '/logado',
    element: <LoggedPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
