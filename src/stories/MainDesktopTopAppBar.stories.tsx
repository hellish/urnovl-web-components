import { html } from 'lit';
import '../components/topappbars/main-desktop-topappbar/ur-main-desktop-topappbar'; // Adjust path as necessary


const Template = args => html`
  <ur-main-desktop-topappbar 
    search-text="${args.searchText}"></ur-main-desktop-topappbar>

  <div class="example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;">
    <div style="height: 1000px;"></div>
  </div>
`;

export default {
  title: 'urnovl/Business/TopAppBars/Main Desktop TopAppBar',
  render: Template,
  argTypes: {
    searchText: {
      control: 'text',
      description: 'Text for the search link',
    },
  },
};

export const Default = {
  args: {
    searchText: 'Search for stories, writers & publishers', // Default search text
  },
};