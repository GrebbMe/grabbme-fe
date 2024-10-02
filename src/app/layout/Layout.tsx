import { Outlet } from 'react-router-dom';
import { Footer } from '@/app/layout/Footer';
import { Header } from '@/app/layout/Header';
import { GridContainer } from '@/app/layout/layout.style';

export const Layout = () => {
  return (
    <>
      <Header />
      <GridContainer>
        <Outlet />
      </GridContainer>
      <Footer />
    </>
  );
};
