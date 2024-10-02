import { RouterProvider } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { router } from '@/app/routers/index';
import { GlobalStyle, theme } from '@/app/styles';
import { ProjectPeriod } from '@/features/post/projectPeriod/ProjectPeriod';

const SampleStyle = styled.div`
  display: grid;
  place-items: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
      <SampleStyle>
        <ProjectPeriod />
      </SampleStyle>
    </ThemeProvider>
  );
};

export default App;
