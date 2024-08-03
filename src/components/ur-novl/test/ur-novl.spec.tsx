import { newSpecPage } from '@stencil/core/testing';
import { UrNovl } from '../ur-novl';

describe('ur-novl', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UrNovl],
      html: `<ur-novl></ur-novl>`,
    });
    expect(page.root).toEqualHtml(`
      <ur-novl>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ur-novl>
    `);
  });
});
