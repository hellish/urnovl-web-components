import { newSpecPage } from '@stencil/core/testing';
import { UrButtonArrowRight } from '../ur-button-arrow-right';

describe('ur-button-arrow-right', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrButtonArrowRight],
            html: `<ur-button-arrow-right></ur-button-arrow-right>`,
        });
        expect(page.root).toEqualHtml(`
      <ur-button-arrow-right>
        <mock:shadow-root>
            <button>
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Arrow right">
                        <path id="Icon" d="M6.33331 14.0002H22.6666M22.6666 14.0002L14.5 5.8335M22.6666 14.0002L14.5 22.1668" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </button>
        </mock:shadow-root>
      </ur-button-arrow-right>
    `);
    });
});
