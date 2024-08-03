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
                    <section class="cover"></section>
                    <section class="info">
                        <div class="title">
                            Novl title
                        </div>
                    </section>
                </mock:shadow-root>
            </ur-novl>
        `);
    });
});
