import { newSpecPage } from '@stencil/core/testing';
import { UrProfile } from '../ur-profile';

describe('ur-profile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UrProfile],
      html: `<ur-profile></ur-profile>`,
    });
    expect(page.root).toEqualHtml(`
      <ur-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ur-profile>
    `);
  });
});
