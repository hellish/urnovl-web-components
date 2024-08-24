import { newE2EPage } from '@stencil/core/testing';

describe('ur-avatar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ur-avatar></ur-avatar>');
        const element = await page.find('ur-avatar');
        expect(element).toHaveClass('hydrated');
    });
});
