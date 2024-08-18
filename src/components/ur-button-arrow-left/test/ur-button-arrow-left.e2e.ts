import { newE2EPage } from '@stencil/core/testing';

describe('ur-button-arrow-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ur-button-arrow-left></ur-button-arrow-left>');
        const element = await page.find('ur-button-arrow-left');
        expect(element).toHaveClass('hydrated');
    });
});
