/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    {
      name: 'storybook-addon-stencil',
      options: {
        stencilOptions: {},
      },
    },
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
};
export default config;
