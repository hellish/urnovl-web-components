import { newSpecPage } from '@stencil/core/testing';
import { UrButtonArrowLeft } from '../ur-button-arrow-left';

describe('ur-button-arrow-left', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrButtonArrowLeft],
            html: `<ur-button-arrow-left></ur-button-arrow-left>`,
        });
        expect(page.root).toEqualHtml(`
      <ur-button-arrow-left>
        <mock:shadow-root>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <g>
                        <path d="M22.6667 13.9998L6.33334 13.9998M6.33334 13.9998L14.5 22.1665M6.33334 13.9998L14.5 5.83317"
                            stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
            </button>
        </mock:shadow-root>
      </ur-button-arrow-left>
    `);
    });
});
