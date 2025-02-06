import { html } from 'lit';
import '../components/ur-user/ur-user';
import { USERS } from '../data/user';

const User = ({
    userId,
    userTitle,
    userCover,
    followers,
    showStats,
    userDescription,
    borderRadius = '8px',
    width,
    loading = false,
}) => html`
    <style>
        ur-user {
            --user-width: ${width};
            --user-border-radius: ${borderRadius};
        }
    </style>
    <ur-user
        user-id="${userId}"
        user-description="${userDescription}"
        user-title="${userTitle}"
        user-cover="${userCover}"
        followers="${followers}"
        show-stats="${showStats}"
        loading=${loading}
    </ur-user>
`;

export default {
    title: 'Urnovl/Business/User',
    render: args => User(args),
};

export const Default = {
    args: USERS[0],
};

export const BrokenCover = {
    args: {
        ...USERS[0],
        userCover: null
    }
};

export const NoStats = {
    args: USERS[1],
};

export const SmallDescription = {
    args: USERS[0],
};

export const BigDescription = {
    args: USERS[2],
};

export const SmallerWidth = {
    args: {
        ...USERS[0],
        width: '250px',
    },
};

export const BiggerWidth = {
    args: {
        ...USERS[0],
        width: '650px',
    },
};

export const BigDescriptionWithBiggerWidth = {
    args: {
        ...USERS[2],
        width: '650px',
    },
};

export const NoBorderRadius = {
    args: {
        ...USERS[0],
        userCover: USERS[0]['userCover'],
        width: '100%',
        borderRadius: '0',
    },
};


export const LoadingData = {
    args: {
        ...USERS[2],
        loading: true,
        width: '300px'
    }
};
