import { html } from 'lit';
import '../components/topappbars/main-desktop-topappbar/ur-main-desktop-topappbar'; // Adjust path as necessary


const Template = args => html`
  <ur-main-desktop-topappbar 
    scroll-behavior="${args.scrollBehavior}"
    search-text="${args.searchText}"></ur-main-desktop-topappbar>

  <div class="example-scroll-target" style="background: #E8E8E8; height: 250px; overflow: auto;">
    <div style="height: 1000px;"></div>
  </div>
`;

export default {
  title: 'urnovl/Business/TopAppBars/Main Desktop TopAppBar',
  render: Template,
  argTypes: {
    scrollBehavior: {
      control: 'select',
      options: ['hide', 'elevate', 'shrink'], // Available scroll behaviors
      description: 'Scroll behavior for the top app bar',
    },
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