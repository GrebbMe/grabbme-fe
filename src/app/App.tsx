import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '@/app/routers/index';
import { GlobalStyle, theme } from '@/app/styles';
import { Toast } from '@/shared';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> <Toast />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
