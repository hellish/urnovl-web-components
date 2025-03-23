import type { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

    addons: [
        require.resolve('storybook-addon-stencil/dist/preset.js'), // ✅ Ensure correct path
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        'storybook-dark-mode',
        '@chromatic-com/storybook',
    ],

    framework: {
        name: '@storybook/html-webpack5', // ✅ Use this for Stencil
        options: {},
    },

    core: {
        disableTelemetry: true, // 👈 Disables telemetry
    },

    docs: {
        autodocs: true
    },
};

export default config;
