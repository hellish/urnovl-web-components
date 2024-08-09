import { newE2EPage } from '@stencil/core/testing';

describe('ur-novl-carousel', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<ur-novl-carousel></ur-novl-carousel>');
        const element = await page.find('ur-novl-carousel');
        expect(element).toHaveClass('hydrated');
    });
});
