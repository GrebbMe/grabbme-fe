import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '@/app/routers';
import { GlobalStyle, theme } from '@/app/styles';
import { Modal, Toast } from '@/shared';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toast />
      <Modal />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
