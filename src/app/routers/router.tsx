import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { GithubLogin, SignUp } from '@/pages/auth/ui';
import RegisterGrabbzone from '@/pages/post/ui/grabbzone/RegisterGrabbzone';
import RegisterProject from '@/pages/post/ui/project/RegisterProject';
import { routerPath } from '@/shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: routerPath.LOGIN,
        element: <GithubLogin />,
      },
      {
        path: routerPath.SIGNUP,
        element: <SignUp />,
      },
      {
        path: routerPath.REGISTER_GRABBZONE,
        element: <RegisterGrabbzone />,
      },
      {
        path: routerPath.REGISTER_PROJECT,
        element: <RegisterProject />,
      },
    ],
  },
]);
