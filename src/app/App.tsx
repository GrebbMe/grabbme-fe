import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from './styles';

const App = (): React.ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>그렙미</div>
    </ThemeProvider>
  );
};

export default App;
