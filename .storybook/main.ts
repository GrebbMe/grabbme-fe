import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../src/assets'],
  viteFinal: (config) => {
    config.resolve = config.resolve || { alias: {}, extensions: [] };

    config.resolve.alias = {
      ...(config.resolve.alias as Record<string, string | undefined>),
      '@': path.resolve(__dirname, '../src'),
    };

    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];

    return config;
  },
};
export default config;
