import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '@/app/routers/index';
import { GlobalStyle, theme } from '@/app/styles';
import { Toast } from '@/shared/ui/toast/Toast';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <Toast />
    </ThemeProvider>
  );
};

export default App;
