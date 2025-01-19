import { html } from 'lit';
import '../components/ur-navigation-drawer/ur-navigation-drawer';
import '../components/ur-locale-filter-panel/ur-locale-filter-panel';
import '../components/ur-locale-filter-button/ur-locale-filter-button';

const LOCALES = [
    { label: 'English', key: 'en', checked: true },
    { label: 'Spanish', key: 'es', checked: false },
    { label: 'French', key: 'fr', checked: false },
    { label: 'German', key: 'de', checked: true },
    { label: 'Souaxilian', key: 'su', checked: true },
];

const NavigationDrawer = ({ open = false, placement = 'right', locales = LOCALES }) => {
    const updateCount = locales => {
        document.getElementsByTagName('ur-locale-filter-button')[0].count = locales.filter(locale => locale.checked).length;
    };

    const handleSave = event => {
        updateCount(event.detail);
        document.getElementsByTagName('ur-navigation-drawer')[0].closeDrawer();
    };

    const handleDrawerOpened = () => {
        document.getElementsByTagName('ur-locale-filter-button')[0].selected = true;
    };

    const handleDrawerClosed = () => {
        document.getElementsByTagName('ur-locale-filter-button')[0].selected = false;
    };

    const handleCancel = () => {
        handleDrawerClosed();
        document.getElementsByTagName('ur-navigation-drawer')[0].closeDrawer();
    };

    const handleFilterButtonClick = () => {
        handleDrawerOpened();
        document.getElementsByTagName('ur-navigation-drawer')[0].openDrawer();
    };

    return html`
        <ur-navigation-drawer
            open=${open}
            placement=${placement}
            @opened=${handleDrawerOpened}
            @closed=${handleDrawerClosed}>
            <ur-locale-filter-panel
                .locales=${locales}
                show-header
                show-footer
                @save=${handleSave}
                @cancel=${handleCancel}
            ></ur-locale-filter-panel>
        </ur-navigation-drawer>

        <ur-locale-filter-button
            @click=${handleFilterButtonClick}
            count=${locales.filter(locale => locale.checked).length}
        ></ur-locale-filter-button>
    `;
};

export default {
    title: 'urnovl/Business/Locale Drawer',
    render: args => NavigationDrawer(args),
    argTypes: {
        open: { control: 'boolean' },
        placement: { control: 'select', options: ['left', 'right'] },
        closeOnEsc: { control: 'boolean' },
        closeOnOverlayClick: { control: 'boolean' },
        contained: { control: 'boolean' },
    },
};

export const Default = {
    args: {
        open: false,
        placement: 'right',
        closeOnEsc: true,
        closeOnOverlayClick: true,
        contained: true,
    },
};
