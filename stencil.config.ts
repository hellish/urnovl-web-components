import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import postcss from 'rollup-plugin-postcss';

export const config: Config = {
    namespace: 'urnovl-web-components',
    buildDist: true,
    sourceMap: false,
    globalStyle: 'src/global.css',
    plugins: [
        sass()
    ],
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'dist-custom-elements',
            customElementsExportBehavior: 'auto-define-custom-elements',
            externalRuntime: false,
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        }
    ],
    testing: {
        browserHeadless: "new",
    },
};
