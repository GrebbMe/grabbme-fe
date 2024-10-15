import { Outlet } from 'react-router-dom';
import { Footer } from '@/app/layout/Footer';
import { Header } from '@/app/layout/Header';
import { Container, GridWrapper } from '@/app/layout/layout.style';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <div></div>
        <GridWrapper>
          <Outlet />
        </GridWrapper>
      </Container>
      <Footer />
    </>
  );
};
