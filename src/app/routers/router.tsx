import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { SignUp } from '@/pages/auth';
import { GrabbZone, Project } from '@/pages/board/ui';
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
