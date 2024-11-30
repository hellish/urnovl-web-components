import { html } from 'lit';
import '../components/ur-navigation-drawer/ur-navigation-drawer';
import '../components/ur-locale-filter-button/ur-locale-filter-button';
import '../components/ur-locale-filter-panel/ur-locale-filter-panel';

// Updated locales to use 'key'
let locales = [
    { label: 'English', key: 'en', checked: true },
    { label: 'Spanish', key: 'es', checked: false },
    { label: 'French', key: 'fr', checked: false },
    { label: 'German', key: 'de', checked: true },
    { label: 'Souaxilian', key: 'su', checked: true },
];

const DrawerExample = ({ open = false, placement = 'right', closeOnEsc = true, closeOnOverlayClick = true, contained = true }) => {
    const updateFilterButtonCount = () => {
        const filterButton = document.getElementById('locale-filter-button') as HTMLUrLocaleFilterButtonElement;
        if (filterButton) {
            filterButton.count = locales.filter(locale => locale.checked).length;
        }
    };

    const handleStateChanged = (event: CustomEvent) => {
        const isSelected = event.detail;
        const drawer = document.getElementById('ur-navigation-drawer') as HTMLUrNavigationDrawerElement;

        if (isSelected) {
            drawer.openDrawer();
        } else {
            closeDrawerAndResetButton();
        }
    };

    const closeDrawerAndResetButton = () => {
        const drawer = document.getElementById('ur-navigation-drawer') as HTMLUrNavigationDrawerElement;
        const filterButton = document.getElementById('locale-filter-button') as HTMLUrLocaleFilterButtonElement;

        // Close the drawer
        if (drawer) drawer.closeDrawer();

        // Reset the button state without emitting the event
        if (filterButton) filterButton.resetSelected(false);
    };

    const handleSaveEvent = (event: CustomEvent) => {
        const selectedLanguages = event.detail;

        console.info('Saving languages:', selectedLanguages);

        // Update the locales to reflect the selected languages
        locales = locales.map(locale => ({
            ...locale,
            checked: selectedLanguages.includes(locale.key), // Use key for identifier
        }));

        // Simulate the application of the changes
        const appliedLanguages = locales.filter(locale => locale.checked).map(locale => locale.key);
        console.info('Applied languages:', appliedLanguages);

        // Simulate the closure of the drawer
        const drawer = document.getElementById('ur-navigation-drawer') as HTMLUrNavigationDrawerElement;
        if (drawer) drawer.closeDrawer();

        // Update the filter button count
        updateFilterButtonCount();
        console.info('Filter button count updated');
    };

    const handleCancelEvent = () => {
        const drawer = document.getElementById('ur-navigation-drawer') as HTMLUrNavigationDrawerElement;
        if (drawer) drawer.closeDrawer();
    };

    return html`
        <div class="example-placement" style="position: relative; overflow: hidden; height: 95vh;">
            <ur-navigation-drawer
                id="ur-navigation-drawer"
                placement=${placement}
                modal
                close-on-esc=${closeOnEsc}
                close-on-overlay-click=${closeOnOverlayClick}
                contained=${contained}
                open=${open}
                @closed=${closeDrawerAndResetButton}
            >
                <ur-locale-filter-panel
                    id="ur-locale-filter-panel"
                    .locales=${locales}
                    show-header="true"
                    show-footer="true"
                    @save=${handleSaveEvent}
                    @cancel=${handleCancelEvent}
                ></ur-locale-filter-panel>
            </ur-navigation-drawer>

            <div style="height: 100%; display: flex; align-items: left; justify-content: start;">
                <ur-locale-filter-button
                    id="locale-filter-button"
                    count=${locales.filter(locale => locale.checked).length}
                    @stateChanged=${handleStateChanged}
                ></ur-locale-filter-button>
            </div>
        </div>
    `;
};

export default {
    title: 'Core/Navigation Drawer with Locale Filter Panel',
    render: args => DrawerExample(args),
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
