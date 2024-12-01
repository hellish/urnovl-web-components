import { html } from 'lit';
import '../components/ur-main-desktop-top-app-bar/ur-main-desktop-top-app-bar'; // Adjust path as necessary


const Template = args => html`
    <ur-main-desktop-top-app-bar
        search-text="${args.searchText}">
    </ur-main-desktop-top-app-bar>

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
