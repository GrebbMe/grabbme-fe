import { Outlet } from 'react-router-dom';
import { Footer } from '@/app/layout/Footer';
import { Header } from '@/app/layout/Header';
import { Container, SideBackground } from '@/app/layout/layout.style';

export const Layout = () => {
  return (
    <>
      <Header />
      <SideBackground>
        <Container>
          <Outlet />
        </Container>
      </SideBackground>
      <Footer />
    </>
  );
};
