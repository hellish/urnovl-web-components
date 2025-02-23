import { html } from 'lit';
import '../components/ur-profile-card/ur-profile-card';

// Define the ProfileCard component in Storybook
const Template = args => html`
    <ur-profile-card
        .avatarSrc=${args.avatarSrc}
        .avatarAlt=${args.avatarAlt}
        .avatarSize=${args.avatarSize}
        .name=${args.name}
        .description=${args.description}
        .followButtonText=${args.followButtonText}
        .unfollowButtonText=${args.unfollowButtonText}
        .isOwner=${args.isOwner}
        .profileType=${args.profileType}
        .showDescription=${args.showDescription}
    ></ur-profile-card>
`;

export default {
    title: 'urnovl/Business/Profile Card',
    render: Template,
    argTypes: {
        avatarSrc: {
            control: 'text',
            description: 'Source URL for the avatar image',
        },
        avatarAlt: {
            control: 'text',
            description: 'Alt text for the avatar image',
        },
        avatarSize: {
            control: 'text',
            description: 'Size of the avatar',
        },
        name: {
            control: 'text',
            description: 'Name or title of the user/page',
        },
        description: {
            control: 'text',
            description: 'Description of the user/page',
        },
        followButtonText: {
            control: 'text',
            description: 'Text for the follow button',
        },
        unfollowButtonText: {
            control: 'text',
            description: 'Text for the unfollow button',
        },
        isOwner: {
            control: 'boolean',
            description: 'Whether the profile belongs to the current user',
        },
        profileType: {
            control: 'select',
            options: ['user', 'page'],
            description: 'Type of profile (user or page)',
        },
        showDescription: {
            control: 'boolean',
            description: 'Whether to show the description',
        },
    },
};

// Default User Profile
export const DefaultUserProfile = {
    args: {
        avatarSrc: 'https://picsum.photos/200',
        avatarSize: '32px',
        avatarAlt: 'User Avatar',
        name: 'John Doe',
        description: 'John is a best-selling author and a lover of penguins.',
        followButtonText: 'Follow',
        unfollowButtonText: 'Following',
        isOwner: false,
        profileType: 'user',
        showDescription: true,
    },
};

// User Profile Without Description
export const UserProfileWithoutDescription = {
    args: {
        ...DefaultUserProfile.args,
        showDescription: false,
    },
};

// User Profile (Owner)
export const UserProfileOwner = {
    args: {
        ...DefaultUserProfile.args,
        isOwner: true,
    },
};

// Page Profile
export const PageProfile = {
    args: {
        avatarSrc: 'https://picsum.photos/200',
        avatarAlt: 'Page Avatar',
        name: 'Penguin Publishing',
        description: 'World-renowned publisher of classic and contemporary literature.',
        followButtonText: 'Follow',
        unfollowButtonText: 'Unfollow',
        isOwner: false,
        profileType: 'page',
        showDescription: true,
    },
};

// Page Profile Without Description
export const PageProfileWithoutDescription = {
    args: {
        ...PageProfile.args,
        showDescription: false,
    },
};

// Page Profile (Owner)
export const PageProfileOwner = {
    args: {
        ...PageProfile.args,
        isOwner: true,
    },
};

// Edge Case: Missing Avatar
export const MissingAvatar = {
    args: {
        ...DefaultUserProfile.args,
        avatarSrc: '',
    },
};

// Edge Case: Long Name and Description
export const LongNameAndDescription = {
    args: {
        ...DefaultUserProfile.args,
        name: 'Dr. Elizabeth Margaret Halsey, PhD',
        description: 'Dr. Halsey is a renowned scientist and the creator of the SPARTAN-II program. Her work has revolutionized human augmentation and artificial intelligence.',
    },
};

// Edge Case: Custom Follow/Unfollow Text
export const CustomFollowText = {
    args: {
        ...DefaultUserProfile.args,
        followButtonText: 'Subscribe',
        unfollowButtonText: 'Unsubscribe',
    },
};
