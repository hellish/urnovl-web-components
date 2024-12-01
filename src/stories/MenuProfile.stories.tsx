import { html } from 'lit';
import '../components/ur-menu-profile/ur-menu-profile'; // Import the menu profile component

// Define the Menu Profile component in Storybook
const MenuProfile = ({
    userAvatar = 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
    userName = 'John Doe',
    userRole = 'Admin',
    wrapperWidth = '220px', // Default width for the wrapper to test avatar resizing
}) => html`
    <div style="width: ${wrapperWidth}; border: 1px solid #ddd;">
        <ur-menu-profile
            user-avatar=${userAvatar}
            user-name=${userName}
            user-role=${userRole}
        ></ur-menu-profile>
    </div>
`;

export default {
    title: 'Urnovl/Basic/Menu Profile', // Define the story under Core/Menu Profile in Storybook
    render: args => MenuProfile(args), // Render the Menu Profile component with args
    argTypes: {
        // Add controls for customizing userAvatar, userName, and userRole
        userAvatar: { control: 'text', description: 'Avatar URL of the user' },
        userName: { control: 'text', description: 'Name of the user' },
        userRole: { control: 'text', description: 'Role of the user' },
        wrapperWidth: { control: 'text', description: 'Width of the wrapper to test avatar resizing' },
    },
};

export const Default = {
    args: {
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
        userName: 'Tasos Tsipidis',
        userRole: 'Author & Reader',
        wrapperWidth: '220px',
    },
};

export const Guest = {
    args: {
        userAvatar: '',
        userName: 'Guest',
        userRole: '',
    },
};

export const SmallAvatarOnly = {
    args: {
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
        userName: 'Tasos Tsipidis',
        userRole: 'Author & Reader',
        wrapperWidth: '56px', // Small wrapper for avatar-only
    },
};

export const TruncatedText = {
    args: {
        userAvatar: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5',
        userName: 'A very long user name that will definitely overflow',
        userRole: 'A very long role name that will also overflow and truncate',
        wrapperWidth: '220px', // Small wrapper to force truncation
    },
};
