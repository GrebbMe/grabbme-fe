import { Outlet } from 'react-router-dom';

import { Header, Footer } from '@/app/layout/index';
import { LayoutContainer, MainContent } from '@/app/styles/index';

export const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </LayoutContainer>
  );
};
