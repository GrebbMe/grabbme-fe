import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from '@/app/styles';
import { Toast, Modal } from '@/shared';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
        <Toast />
        <Modal />
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
