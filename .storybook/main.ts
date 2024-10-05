import type { StorybookConfig } from '@storybook/react-vite';
import svgr from 'vite-plugin-svgr';

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
  staticDirs: ['../src/shared/assets'],
  viteFinal: (config) => {
    config.resolve = config.resolve || { alias: {}, extensions: [] };
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];

    config.plugins.push(svgr());

    return config;
  },
};
export default config;
