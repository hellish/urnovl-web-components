import { newSpecPage } from '@stencil/core/testing';
import { UrProfile } from '../ur-profile';

describe('ur-profile', () => {
    it('renders', async () => {
        const page = await newSpecPage({
            components: [UrProfile],
            html: `<ur-profile></ur-profile>`,
        });
        expect(page.root).toEqualHtml(`
      <ur-profile>
        <mock:shadow-root>
         <div class="profile">
           <div class="name"></div>
           <div class="social"></div>
           <div class="action follow-action">
             <button>
               Follow
             </button>
           </div>
           <div class="action donate-action">
             <button>
               Donate
             </button>
           </div>
           <div class="action member-action">
             <button>
               Become Member
             </button>
           </div>
           <div class="action message-action">
             <button>
               Message
             </button>
           </div>
           <div class="stats">
             <div class="stat">
               <span class="label">
                 Stories
               </span>
               <span class="value">
                 0
               </span>
             </div>
             <div class="stat">
               <span class="label">
                 Views
               </span>
               <span class="value">
                 0
               </span>
             </div>
             <div class="stat">
               <span class="label">
                 Followers
               </span>
               <span class="value">
                 0
               </span>
             </div>
             <div class="stat">
               <span class="label">
                 Writers
               </span>
               <span class="value">
                 0
               </span>
             </div>
           </div>
           <div class="languages">
             <div class="title">
               Languages
             </div>
             <div class="pills">
               <div class="pill">
                 English
               </div>
             </div>
           </div>
           <div class="genres">
             <div class="title">
               Genres
             </div>
             <div class="pills">
               <div class="pill">
                 All
               </div>
             </div>
           </div>
           <div class="member_since">
             Member Since: May 25, 20215
           </div>
         </div>
        </mock:shadow-root>
      </ur-profile>
    `);
    });
});
