import { newSpecPage } from '@stencil/core/testing';
import { UrGenerate } from '../ur-generate';

describe('ur-generate', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UrGenerate],
      html: `<ur-generate></ur-generate>`,
    });
    expect(page.root).toEqualHtml(`
      <ur-generate>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ur-generate>
    `);
  });
});
