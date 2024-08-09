import { newSpecPage } from '@stencil/core/testing';
import { UrNovlCarousel } from '../ur-novl-carousel';

describe('ur-novl-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UrNovlCarousel],
      html: `<ur-novl-carousel></ur-novl-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <ur-novl-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ur-novl-carousel>
    `);
  });
});
