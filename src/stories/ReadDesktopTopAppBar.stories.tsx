import { html } from 'lit';
import '../components/ur-read-desktop-top-app-bar/ur-read-desktop-top-app-bar'; // Adjust path as necessary
import '../components/ur-select/ur-select'; // Import ur-select component
import '../components/ur-linear-progress/ur-linear-progress'; // Import ur-select component
import 'mdui/components/icon.js';

const Template = args => {
    // Hypothetical chapters data
    const chapters = [
        { id: '1', title: 'Beneath the Crimson Sky' },
        { id: '2', title: 'The Hidden Truth' },
        { id: '3', title: 'Echoes of the Forgotten' },
        { id: '4', title: 'Whispers in the Dark' },
        { id: '5', title: 'The Silent Horizon' },
        { id: '6', title: 'A Kingdom’s Fall' },
        { id: '7', title: 'The Final Stand' },
        { id: '8', title: 'Shadows of the Unknown' },
        { id: '9', title: 'The Lost Journey' },
        { id: '10', title: 'Dreams of Fire' },
        { id: '11', title: 'The Eternal Quest' },
        { id: '12', title: 'Paths Unseen' },
        { id: '13', title: 'Secrets of the Past' },
        { id: '14', title: 'The Rise of Heroes' },
        { id: '15', title: 'Fate’s Edge' },
    ];

    return html`
        <ur-read-desktop-top-app-bar novel-title="${args.novelTitle}">
            <!-- Chapter Select Dropdown -->
            <ur-select slot="chapter-select" name="chapters-select" value="6" variant="outlined" flex="true" usage="${args.usage}" suffix="&#9660;">
                ${chapters.map((chapter, index) =>
                    args.usage === 'topBar'
                        ? html`<mdui-menu-item value="${chapter.id}">${index + 1}. ${chapter.title}</mdui-menu-item>`
                        : html`<mdui-menu-item value="${chapter.id}">${chapter.title}</mdui-menu-item>`,
                )}
            </ur-select>

            <!-- Linear Progress Bar -->
            <ur-linear-progress slot="read-progress" id="progress-bar" value="0" max="1"></ur-linear-progress>
        </ur-read-desktop-top-app-bar>

        <!-- Scrollable Container -->
        <div class="example-read-page example-scroll-target" style="background: #F0F0F0; height: 250px; overflow: auto;" onscroll="updateProgress()">
            <div style="height: 1000px;"></div>
        </div>

        <script>
            // Function to update the progress bar based on the scroll position
            function updateProgress() {
                const scrollable = document.querySelector('.example-read-page');
                const progressBar = document.querySelector('#progress-bar');

                if (scrollable && progressBar) {
                    const scrollHeight = scrollable.scrollHeight - scrollable.clientHeight;
                    const scrollTop = scrollable.scrollTop;

                    // Calculate the percentage of scroll completion (0 to 1)
                    const progressValue = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

                    // Update the progress bar's value
                    progressBar.value = progressValue;
                }
            }

            // Initialize progress bar on load
            document.addEventListener('DOMContentLoaded', updateProgress);
        </script>
    `;
};

export default {
    title: 'urnovl/Business/TopAppBars/Reading Desktop TopAppBar',
    render: Template,
    argTypes: {
        novelTitle: {
            // Use the correct prop name here
            control: 'text',
            description: 'Title displayed in the app bar',
        },
        usage: {
            control: 'text',
            description: 'Usage prop passed to ur-select component',
            defaultValue: 'topBar',
        },
    },
};

export const Default = {
    args: {
        novelTitle: 'War and Peace', // Default title for the top app bar
        usage: 'topBar', // Default usage
    },
};
