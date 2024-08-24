import { newSpecPage } from '@stencil/core/testing';
import { UrUserProfile } from '../ur-user-profile';

describe('ur-user-profile', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrUserProfile],
            html: `<ur-user-profile></ur-user-profile>`,
        });
        expect(page.root).toEqualHtml(`
      <ur-user-profile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ur-user-profile>
    `);
    });
});
