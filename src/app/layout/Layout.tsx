import { Outlet } from 'react-router-dom';
import { Footer } from '@/app/layout/Footer';
import { Header } from '@/app/layout/Header';
import { Container, GridWrapper, DashboardGridWrapper } from '@/app/layout/layout.style';

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <div></div>
        <DashboardGridWrapper>
          <Outlet />
        </DashboardGridWrapper>
      </Container>
      <Footer />
    </>
  );
};

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <GridWrapper>
          <Outlet />
        </GridWrapper>
      </Container>
    </>
  );
};
