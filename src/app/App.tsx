import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '@/app/routers';
import { GlobalStyle, theme } from '@/app/styles';
import { Modal, Toast } from '@/shared';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 4,
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Toast />
        <Modal />
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
