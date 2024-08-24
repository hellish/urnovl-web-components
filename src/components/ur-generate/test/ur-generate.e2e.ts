import { newE2EPage } from '@stencil/core/testing';

describe('ur-generate', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ur-generate></ur-generate>');

    const element = await page.find('ur-generate');
    expect(element).toHaveClass('hydrated');
  });
});
