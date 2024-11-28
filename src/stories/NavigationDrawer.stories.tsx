import { html } from 'lit';
import '../components/ur-navigation-drawer/ur-navigation-drawer';
import '../components/ur-locale-filter-button/ur-locale-filter-button';
import '../components/ur-locale-filter-panel/ur-locale-filter-panel';

const DrawerExample = ({
    open = false,
    placement = 'right',
    closeOnEsc = true,
    closeOnOverlayClick = true,
    contained = true,
    locales = [
        ['English', 'en', true],
        ['Spanish', 'es', false],
        ['French', 'fr', false],
        ['German', 'de', true],
        ['Souaxilian', 'su', true]
    ],
}) => html`
    <div class="example-placement" style="position: relative; overflow: hidden; height: 95vh;">
        <!-- Navigation Drawer -->
        <ur-navigation-drawer
            id="ur-navigation-drawer"
            placement=${placement}
            modal
            close-on-esc=${closeOnEsc}
            close-on-overlay-click=${closeOnOverlayClick}
            contained=${contained}
            open=${open}
        >
            <!-- Locale Filter Panel -->
            <ur-locale-filter-panel id="ur-locale-filter-panel" .locales=${locales} show-header="true" show-footer="true"></ur-locale-filter-panel>
        </ur-navigation-drawer>

        <!-- Locale Filter Button -->
        <div style="height: 100%; display: flex; align-items: left; justify-content: start;">
            <ur-locale-filter-button id="locale-filter-button" count="5"></ur-locale-filter-button>
        </div>

        <script>
            const filterButton = document.getElementById('locale-filter-button');
            const drawer = document.getElementById('ur-navigation-drawer');
            const filterPanel = document.getElementById('ur-locale-filter-panel');

            // Helper function to close the drawer and reset the filter button state
            function closeDrawerAndResetButton() {
                drawer.closeDrawer();
                filterButton.selected = false;

                // Temporarily remove the event listener to prevent recursion
                filterButton.removeEventListener('stateChanged', handleStateChanged);

                // Dispatch the stateChanged event
                const stateChangedEvent = new CustomEvent('stateChanged', { detail: false });
                filterButton.dispatchEvent(stateChangedEvent);

                // Reattach the event listener
                filterButton.addEventListener('stateChanged', handleStateChanged);
            }

            // Handle stateChanged event for the filter button
            function handleStateChanged(event) {
                const isSelected = event.detail; // Access emitted state (true/false)
                if (isSelected) {
                    drawer.openDrawer(); // Open the drawer if the button is selected
                } else {
                    closeDrawerAndResetButton(); // Close the drawer if the button is deselected
                }
            }

            // Add the stateChanged event listener
            filterButton.addEventListener('stateChanged', handleStateChanged);

            // Listen to the closed event from the navigation drawer
            drawer.addEventListener('closed', () => {
                closeDrawerAndResetButton(); // Ensure the locale filter button is deselected when the drawer is closed
            });

            // Listen to the cancel event from the locale filter panel
            filterPanel.addEventListener('cancel', () => {
                console.log('Cancel event caught');
                closeDrawerAndResetButton();
            });

            // Listen to the save event from the locale filter panel
            filterPanel.addEventListener('save', () => {
                console.log('Save event caught');
                closeDrawerAndResetButton();
            });
        </script>
    </div>
`;

export default {
    title: 'Core/Navigation Drawer with Locale Filter Panel',
    render: args => DrawerExample(args),
    argTypes: {
        open: { control: 'boolean' },
        placement: { control: 'select', options: ['left', 'right'] },
        closeOnEsc: { control: 'boolean' },
        closeOnOverlayClick: { control: 'boolean' },
        contained: { control: 'boolean' },
        locales: { control: 'object' },
    },
};

export const Default = {
    args: {
        open: false,
        placement: 'right',
        closeOnEsc: true,
        closeOnOverlayClick: true,
        contained: true,
        locales: [
            ['English', 'en', true],
            ['Spanish', 'es', false],
            ['French', 'fr', false],
            ['German', 'de', true],
            ['Souaxilian', 'su', true]
        ],
    },
};
