import { newSpecPage } from '@stencil/core/testing';
import { UrAvatar } from '../ur-avatar';

describe('ur-avatar', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrAvatar],
            html: `<ur-avatar></ur-avatar>`,
        });
        expect(page.root).toEqualHtml(`
      <ur-avatar>
        <mock:shadow-root>
          <img class="avatar" style="border-radius: 50%; height: 32px; width: 32px; border-width: 0;">
        </mock:shadow-root>
      </ur-avatar>
    `);
    });
});
