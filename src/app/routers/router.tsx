import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/app/layout';
import { SignUp } from '@/pages/auth';
import RegisterGrabbzone from '@/pages/post/ui/grabbzone/RegisterGrabbzone';
import RegisterProject from '@/pages/post/ui/project/RegisterProject';
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
