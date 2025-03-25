const fs = require('fs');

function copyFile(from, to) {
    try {
        fs.copyFileSync(from, to);
        console.log(`file ${from} copied successfully to ${to}!`);
    } catch (err) {
        console.error('error copying file:', err);
    }
}

copyFile(
    './node_modules/storybook-addon-stencil/dist/CustomElementsManifest.js',
    './node_modules/storybook-addon-stencil/dist/CustomElementsManifest'
);

copyFile(
    './node_modules/storybook-addon-stencil/dist/stencil-css.js',
    './node_modules/storybook-addon-stencil/dist/stencil-css'
);

copyFile(
    './node_modules/storybook-addon-stencil/dist/ProgramService.js',
    './node_modules/storybook-addon-stencil/dist/ProgramService'
);

copyFile(
    './node_modules/storybook-addon-stencil/dist/stencil.js',
    './node_modules/storybook-addon-stencil/dist/stencil'
)
