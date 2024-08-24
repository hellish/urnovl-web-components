import { newE2EPage } from '@stencil/core/testing';

describe('ur-user-profile', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ur-user-profile></ur-user-profile>');
        const element = await page.find('ur-user-profile');
        expect(element).toHaveClass('hydrated');
    });
});
