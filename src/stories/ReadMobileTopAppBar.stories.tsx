import { html } from 'lit';
import '../components/ur-read-mobile-top-app-bar/ur-read-mobile-top-app-bar'; // Adjust path as necessary

const Template = args => html`
    <ur-read-mobile-top-app-bar
        header-title="${args.headerTitle}">
    </ur-read-mobile-top-app-bar>

    <div class="example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;">
        <div style="height: 1000px;"></div>
    </div>
`;

export default {
    title: 'urnovl/Business/TopAppBars/Reading Mobile TopAppBar',
    render: Template,
    argTypes: {
        headerTitle: { // Use the correct prop name here
            control: 'text',
            description: 'Title displayed in the app bar',
        },
    },
};

export const Default = {
    args: {
        headerTitle: 'Harry Potter and the Sorcerer’s Stone', // Default title for the top app bar
    },
};
