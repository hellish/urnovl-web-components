import { newE2EPage } from '@stencil/core/testing';

describe('ur-profile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ur-profile></ur-profile>');

    const element = await page.find('ur-profile');
    expect(element).toHaveClass('hydrated');
  });
});
