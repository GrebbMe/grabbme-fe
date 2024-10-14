import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { SignUp } from '@/pages/auth';
import { routerPath } from '@/shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routerPath.SIGNUP,
        element: <SignUp />,
      },
    ],
  },
]);
