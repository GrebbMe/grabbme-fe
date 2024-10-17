import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout, MainLayout } from '@/app/layout';
import { SignUp } from '@/pages/auth';
import { MyProfilePage, MyBookmarkPage, MyPostPage, MyProjectPage } from '@/pages/mypage';
import { GrabbZone, Project } from '@/pages/post';
import { routerPath } from '@/shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: routerPath.SIGNUP,
        element: <SignUp />,
      },
      { path: routerPath.PROJECT, element: <Project /> },
      { path: routerPath.GRABB_ZONE, element: <GrabbZone /> },
    ],
  },
  {
    path: routerPath.MYPAGE,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MyProfilePage />,
      },
      {
        path: routerPath.MY_PROFILE,
        element: <MyProfilePage />,
      },
      {
        path: routerPath.MY_POSTS,
        element: <MyPostPage />,
      },
      {
        path: routerPath.MY_BOOKMARKS,
        element: <MyBookmarkPage />,
      },
      {
        path: routerPath.MY_PROJECTS,
        element: <MyProjectPage />,
      },
    ],
  },
]);
