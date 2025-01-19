import { html } from 'lit';
import '../components/ur-main-desktop-top-app-bar/ur-main-desktop-top-app-bar';

const Template = args => html`
    <ur-main-desktop-top-app-bar
        search-text="${args.searchText}"
        quill-count=${args.quillCount}
        quill-text="${args.quillText}"
        device-variant="${args.deviceVariant}">
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
        quillCount: {
            control: 'number',
            description: 'Number of quills to display',
        },
        quillText: {
            control: 'text',
            description: 'Text to display next to quill icon',
        },
        deviceVariant: {
            control: 'select',
            options: ['desktop', 'mobile'],
            description: 'Device variant of the top app bar',
        }
    },
};

export const Default = {
    args: {
        searchText: 'Search for stories, writers & publishers',
        quillCount: 0,
        quillText: 'Quills',
        deviceVariant: 'desktop'
    },
};

export const WithQuillCount = {
    args: {
        searchText: 'Search for stories, writers & publishers',
        quillCount: 5,
        quillText: 'Quills',
        deviceVariant: 'desktop'
    },
};

export const MobileVariant = {
    args: {
        deviceVariant: 'mobile',
        searchText: 'Search',
        quillCount: 0,
        quillText: 'Quills'
    },
};