import { newSpecPage } from '@stencil/core/testing';
import { UrNovl } from '../ur-novl';

describe('ur-novl', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrNovl],
            html: `<ur-novl novl-cover-fallback="test"></ur-novl>`,
        });

        expect(page.root).toEqualHtml(`
            <ur-novl novl-cover-fallback="test">
                <mock:shadow-root>
                    <section class="cover" style="background-image: url(test);">
                        <div class="ongoing">
                            <span>
                                O
                            </span>
                        </div>
                    </section>
                    <section class="info">
                        <div class="title">
                            Novl title
                        </div>
                        <div class="stats">
                            <div class="likes">
                            <div>
                                <b>
                                    0
                                </b>
                                Likes
                            </div>
                            <div class="dot">
                                ·
                            </div>
                        </div>
                        <div class="views">
                            <b>
                                0
                            </b>
                            Views
                        </div>
                    </div>
                    <div class="description"></div>
                    <div class="author">
                        <div class="avatar" style="background-image: url(undefined);"></div>
                        <div class="name"></div>
                    </div>
                   </section>
                </mock:shadow-root>
            </ur-novl>
        `);
    });
});
