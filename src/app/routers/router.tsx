import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/app/layout';
import { GithubLogin, SignUp } from '@/pages/auth/ui';

const enum RouterPath {
  GithubLogin = 'github-login',
  SignUp = 'sign-up',
}

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: RouterPath.GithubLogin,
        element: <GithubLogin />,
      },
      {
        path: RouterPath.SignUp,
        element: <SignUp />,
      },
    ],
  },
]);
