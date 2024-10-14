import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout, MainLayout } from '@/app/layout';
import { GithubLogin, SignUp } from '@/pages/auth/ui';
import { MyProfile, MyPosts, MyProjects, MyBookmarks } from '@/pages/mypage';
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
      {
        path: routerPath.MYPAGE,
        element: <MainLayout />,
        children: [
          {
            path: routerPath.MY_PROFILE,
            element: <MyProfile />,
          },
          {
            path: routerPath.MY_POSTS,
            element: <MyPosts />,
          },
          {
            path: routerPath.MY_BOOKMARKS,
            element: <MyBookmarks />,
          },
          {
            path: routerPath.MY_PROJECTS,
            element: <MyProjects />,
          },
        ],
      },
    ],
  },
]);
