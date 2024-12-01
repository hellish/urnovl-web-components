import { html } from 'lit';
import '../components/ur-main-left-menu/ur-main-left-menu';
import '../components/ur-avatar/ur-avatar'; // Assuming you have the avatar component
import '../components/ur-list/ur-list'; // Assuming you have the list component

// Helper function to render the menu with different states
const MenuWithProfile = ({ expanded, loggedIn, userName, userAvatar, userRole }) => html`
    <ur-main-left-menu
        expanded=${expanded}
        logged-in=${loggedIn}
        user-name=${userName}
        user-avatar=${userAvatar}
        user-role=${userRole}
        @toggleExpand=${e => console.log('toggleExpand event payload:', e.detail)}
    >
        ${loggedIn
            ? html`
                  <ur-menu-profile
                      class=${expanded ? 'expanded' : 'collapsed'}
                      user-avatar=${userAvatar}
                      user-name=${userName}
                      user-role=${userRole}
                  ></ur-menu-profile>
              `
            : ''}
    </ur-main-left-menu>
`;

export default {
    title: 'urnovl/Business/MainLeftMenu',
    render: args => MenuWithProfile(args),
    argTypes: {
        expanded: {
            control: 'boolean',
            description: 'Determines whether the menu is expanded (open) or collapsed (closed)',
        },
        loggedIn: {
            control: 'boolean',
            description: 'Determines if the user is logged in',
        },
        userName: {
            control: 'text',
            description: 'Name of the logged-in user',
        },
        userRole: {
            control: 'text',
            description: 'Role of the logged-in user',
        },
        userAvatar: {
            control: 'text',
            description: 'URL of the user avatar',
        },
    },
    parameters: {
        actions: {
            handles: ['toggleExpand'], // Logs the event in the Storybook Actions panel
        },
    },
};

// Story Definitions
export const Default = {
    args: {
        expanded: false,
        loggedIn: false,
        userName: 'Guest',
        userRole: '',
        userAvatar: '',
    },
};

export const LoggedOutOpened = {
    args: {
        expanded: true,
        loggedIn: false,
        userName: 'Guest',
        userRole: '',
        userAvatar: '',
    },
};

export const LoggedInClosed = {
    args: {
        expanded: false,
        loggedIn: true,
        userName: 'Tasos Tsipos',
        userRole: 'Author & Reader',
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    },
};

export const LoggedInOpened = {
    args: {
        expanded: true,
        loggedIn: true,
        userName: 'Tasos Tsipidopoulakoglou',
        userRole: 'Author & Reader',
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    },
};
