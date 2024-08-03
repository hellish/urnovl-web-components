import { newE2EPage } from '@stencil/core/testing';

describe('ur-novl', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ur-novl></ur-novl>');

    const element = await page.find('ur-novl');
    expect(element).toHaveClass('hydrated');
  });
});
