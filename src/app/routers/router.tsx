import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { GithubLogin, SignUp } from '@/pages/auth/ui';
import { GrabbZone, Project } from '@/pages/post';
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
      { path: routerPath.PROJECT, element: <Project /> },
      { path: routerPath.GRABB_ZONE, element: <GrabbZone /> },
    ],
  },
]);
