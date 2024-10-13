import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout } from '@/app/layout';
import { GithubLogin, SignUp } from '@/pages/auth/ui';
import { routerPath } from '@/shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: routerPath.LOGIN,
        element: <GithubLogin />,
      },
      {
        path: routerPath.SIGNUP,
        element: <SignUp />,
      },
    ],
  },
]);
