import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/app/styles';
import '@/index.css';
import { Toast } from '@/shared';


const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
        <Toast />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
