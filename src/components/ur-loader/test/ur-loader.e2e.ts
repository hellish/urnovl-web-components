import { newE2EPage } from '@stencil/core/testing';

describe('ur-loader', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ur-loader></ur-loader>');
        const element = await page.find('ur-loader');
        expect(element).toHaveClass('hydrated');
    });
});
