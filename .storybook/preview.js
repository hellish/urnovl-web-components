import { withActions } from '@storybook/addon-actions/decorator';

/** @type { import('@storybook/web-components').Preview } */
const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        // actions: { argTypesRegex: '^on.*' },
        decorators: [withActions],
        darkMode: {
            darkClass: ['ur-theme-dark', 'mdui-theme-dark'],
            lightClass: ['ur-theme-light', 'mdui-theme-light'],
            classTarget: 'html',
            stylePreview: true,
        },
    },

    tags: ['autodocs'],
};

export default preview;
