import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '@/app/routers';
import { GlobalStyle, theme } from '@/app/styles';
import { Modal, Toast } from '@/shared';
import { ChatSection } from '@/widgets/chat';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Toast />
      <Modal />
      <ChatSection />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
