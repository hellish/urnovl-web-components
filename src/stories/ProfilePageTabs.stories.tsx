import { html } from 'lit';
import '../components/ur-page-profile-tabs/ur-page-profile-tabs';

export default {
    title: 'urnovl/Business/Profile Tabs',
    parameters: {
        viewport: {
            defaultViewport: 'responsive', // Set a responsive viewport by default
        },
    },
    render: args => {
        // Function to handle tab changes
        const handleTabChange = (event: CustomEvent<string>) => {
            const newTabValue = event.detail; // Get the new tab value
            console.log('Tab changed to:', newTabValue); // Debugging: Log the new tab value

            // Update the URL
            const url = new URL(window.location.href);

            // Check if the URL already has a 'tab' parameter
            if (url.searchParams.has('tab')) {
                url.searchParams.set('tab', newTabValue); // Update the existing 'tab' parameter
            } else {
                url.searchParams.append('tab', newTabValue); // Add a new 'tab' parameter
            }

            console.log('New URL:', url.toString()); // Debugging: Log the new URL
            window.history.pushState({}, '', url.toString());
        };

        // Read the tab from the URL when the story loads
        const urlParams = new URLSearchParams(window.location.search);
        const tabFromUrl = urlParams.get('tab');
        const initialTab = tabFromUrl || args.initialTab || 'stories';
        console.log('Initial tab from URL:', initialTab); // Debugging: Log the initial tab

        return html`
            <div style="max-width: 800px; margin: 20px;">
                <ur-page-profile-tabs
                    .activeTab=${initialTab}
                    .isOwner=${args.isOwner}
                    .storiesTabText=${args.storiesTabText}
                    .libraryTabText=${args.libraryTabText}
                    .transactionsTabText=${args.transactionsTabText}
                    .statisticsTabText=${args.statisticsTabText}
                    .settingsTabText=${args.settingsTabText}
                    .isMobile=${args.isMobile}
                    @tabChange=${handleTabChange}
                >
                    <div slot="stories">Latest published stories and drafts</div>
                    <div slot="library">Books saved for later reading</div>
                    <div slot="transactions">Recent purchases and earnings</div>
                    <div slot="statistics">Monthly reading and writing analytics</div>
                    <div slot="settings">Account preferences and notifications</div>
                    <div slot="about">About the page</div>
                </ur-page-profile-tabs>
            </div>
        `;
    },
    argTypes: {
        isOwner: { control: 'boolean' },
        isMobile: { control: 'boolean' }, // Add isMobile to argTypes
        initialTab: {
            control: 'select',
            options: ['stories', 'library', 'transactions', 'statistics', 'settings', 'about'],
        },
    },
};

export const Visitor = {
    args: {
        isOwner: false,
        storiesTabText: 'Stories',
        libraryTabText: 'Library',
        isMobile: false, // Default to desktop view
    },
};

export const Owner = {
    args: {
        isOwner: true,
        storiesTabText: 'My Stories',
        libraryTabText: 'Reading List',
        transactionsTabText: 'Transactions',
        statisticsTabText: 'Analytics',
        settingsTabText: 'Settings',
        isMobile: false, // Default to desktop view
    },
};

export const PreselectedTab = {
    args: {
        isOwner: true,
        initialTab: 'statistics',
        storiesTabText: 'My Stories',
        libraryTabText: 'Reading List',
        transactionsTabText: 'Transactions',
        statisticsTabText: 'Analytics',
        settingsTabText: 'Settings',
        isMobile: false, // Default to desktop view
    },
};

export const MobileView = {
    args: {
        isOwner: false,
        storiesTabText: 'Stories',
        libraryTabText: 'Library',
        isMobile: true, // Force mobile view
    },
    parameters: {
        viewport: {
            defaultViewport: 'mobile1', // Force mobile viewport for this story
        },
    },
};