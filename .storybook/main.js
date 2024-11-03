/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        {
            name: 'storybook-addon-stencil',
            options: {
                stencilOptions: {},
            },
        },
        'storybook-dark-mode',
        '@chromatic-com/storybook',
    ],

    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },

    docs: {},
};
export default config;
