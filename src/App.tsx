import { FC } from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './account/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export const App: FC<{ name: string }> = ({ name }) => {
  return <RouterProvider router={router} />;
};
