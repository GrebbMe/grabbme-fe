import { Outlet } from 'react-router-dom';
import { Footer } from '@/app/layout/Footer';
import { Header } from '@/app/layout/Header';
import { Container, Margin } from '@/app/layout/layout.style';

export const Layout = () => {
  return (
    <>
      <Header />
      <Margin>
        <Container>
          <Outlet />
        </Container>
      </Margin>
      <Footer />
    </>
  );
};
