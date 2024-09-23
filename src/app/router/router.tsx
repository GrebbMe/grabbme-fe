import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/app/layout';
import { GithubLogin, SignUp } from '@/pages/auth/ui';

export const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'github-login',
        element: <GithubLogin />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
]);
