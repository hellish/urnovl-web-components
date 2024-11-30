import { html } from 'lit';
import '../components/ur-menu/ur-left-menu';
import '../components/ur-avatar/ur-avatar'; // Assuming you have the avatar component
import '../components/ur-list/ur-list'; // Assuming you have the list component

// Helper function to render the menu with different states
const MenuWithProfile = ({ isExpanded, isLoggedIn, userName, userAvatar, userRole }) => html`
    <ur-left-menu
        .isExpanded=${isExpanded}
        .isLoggedIn=${isLoggedIn}
        user-name=${userName}
        user-avatar=${userAvatar}
        user-role=${userRole}
        @toggleExpand=${e => console.log('toggleExpand event payload:', e.detail)}
    >
        <!-- Include ur-menuprofile directly -->
        ${isLoggedIn
            ? html`
                  <ur-menuprofile
                      class=${isExpanded ? 'expanded' : 'collapsed'}
                      user-avatar=${userAvatar}
                      user-name=${userName}
                      user-role=${userRole}
                  ></ur-menuprofile>
              `
            : ''}
    </ur-left-menu>
`;

export default {
    title: 'urnovl/Business/Menu',
    render: args => MenuWithProfile(args),
    argTypes: {
        isExpanded: {
            control: 'boolean',
            description: 'Determines whether the menu is expanded (open) or collapsed (closed)',
        },
        isLoggedIn: {
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
        isExpanded: false,
        isLoggedIn: false,
        userName: 'Guest',
        userRole: '',
        userAvatar: '',
    },
};

export const LoggedOutOpened = {
    args: {
        isExpanded: true,
        isLoggedIn: false,
        userName: 'Guest',
        userRole: '',
        userAvatar: '',
    },
};

export const LoggedInClosed = {
    args: {
        isExpanded: false,
        isLoggedIn: true,
        userName: 'Tasos Tsipos',
        userRole: 'Author & Reader',
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    },
};

export const LoggedInOpened = {
    args: {
        isExpanded: true,
        isLoggedIn: true,
        userName: 'Tasos Tsipidopoulakoglou',
        userRole: 'Author & Reader',
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    },
};
