/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        'storybook-addon-stencil',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        'storybook-dark-mode',
        '@chromatic-com/storybook',
    ],

    framework: {
        name: '@storybook/web-components-vite',
        options: {},
    },

    core: {
        disableTelemetry: true, // 👈 Disables telemetry
    },

    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            'storybook-addon-stencil': require.resolve('storybook-addon-stencil/dist/stencil'),
        };

        return config;
    },

    docs: {},
};
export default config;
