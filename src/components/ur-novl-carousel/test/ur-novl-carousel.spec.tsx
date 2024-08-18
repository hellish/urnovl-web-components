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
            <div class="carousel">
                <swiper-container breakpoint-base="container" slides-per-view="auto" space-between="0"></swiper-container>
            </div>
        </mock:shadow-root>
      </ur-novl-carousel>
    `);
    });
});
