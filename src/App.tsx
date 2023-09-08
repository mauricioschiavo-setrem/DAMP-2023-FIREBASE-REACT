import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { HomePage } from './HomePage';
import { ListPage } from './ListPage';
import { LoginPage } from './LoginPage';

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
    path: '/list',
    element: <ListPage />,
  },
]);

export const App = () => {
  return (
    <>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </>
  );
};
