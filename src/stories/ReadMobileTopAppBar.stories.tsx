import { html } from 'lit';
import '../components/topappbars/read-mobile-topappbar/ur-read-mobile-topappbar'; // Adjust path as necessary

const Template = args => html`
  <ur-read-mobile-topappbar
    title="${args.title}">
  </ur-read-mobile-topappbar>

  <div class="example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;">
    <div style="height: 1000px;"></div>
  </div>
`;

export default {
  title: 'urnovl/Business/TopAppBars/Reading Mobile TopAppBar',
  render: Template,
  argTypes: {
    title: {
      control: 'text',
      description: 'Title displayed in the app bar',
    },
  },
};

export const Default = {
  args: {
    title: 'Reading Mode', // Default title for the top app bar
  },
};
