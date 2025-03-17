import { html } from 'lit';
import '../components/ur-notification/ur-notification';
import '../components/ur-time-ago/ur-time-ago';
import { NotificationType } from '../components/ur-notification/ur-notification.types';

const Template = args => html`
    <style>
        ur-time-ago::part(time) {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    </style>
    <ur-notification .notification=${args.notification} locale=${args.locale} @notificationAction=${args.onNotificationAction}></ur-notification>
`;

export default {
    title: 'urnovl/Basic/Notification',
    render: Template,
    argTypes: {
        notification: {
            control: 'object',
            description: 'The notification data object',
        },
        locale: {
            control: 'text',
            description: 'Locale for date formatting',
        },
        onNotificationAction: { action: 'notificationAction' },
    },
};

// Default Follow Notification
export const FollowNotification = {
    args: {
        notification: {
            _id: '1',
            event: 'followed',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
                followed: false,
            },
            read: false,
            updatedAt: new Date().toISOString(),
        } as NotificationType,
        locale: 'en',
    },
};

// Read Follow Notification
export const ReadFollowNotification = {
    args: {
        notification: {
            ...FollowNotification.args.notification,
            read: true,
        },
        locale: 'en',
    },
};

// Already Following Notification
export const AlreadyFollowingNotification = {
    args: {
        notification: {
            ...FollowNotification.args.notification,
            creator: {
                ...FollowNotification.args.notification.creator,
                followed: true,
            },
        },
        locale: 'en',
    },
};

// Page Follow Notification
export const PageFollowNotification = {
    args: {
        notification: {
            _id: '7',
            event: 'pfollowed',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
                followed: false,
            },
            page: {
                name: 'My Page',
            },
            read: false,
            updatedAt: new Date().toISOString(),
        } as NotificationType,
        locale: 'en',
    },
};

// Read Page Follow Notification
export const ReadPageFollowNotification = {
    args: {
        notification: {
            ...PageFollowNotification.args.notification,
            read: true,
        },
        locale: 'en',
    },
};

// No Profile Image
export const NoProfileImageNotification = {
    args: {
        notification: {
            ...FollowNotification.args.notification,
            creator: {
                ...FollowNotification.args.notification.creator,
                profileImage: undefined,
            },
        },
        locale: 'en',
    },
};

// Different Locale
export const SpanishLocaleNotification = {
    args: {
        ...FollowNotification.args,
        locale: 'es',
    },
};

// Long Display Name
export const LongDisplayNameNotification = {
    args: {
        notification: {
            ...FollowNotification.args.notification,
            creator: {
                ...FollowNotification.args.notification.creator,
                displayName: 'Alexandra Constantine Bartholomew III',
            },
        },
        locale: 'en',
    },
};

export const CommentNotification = {
    args: {
        notification: {
            _id: '2',
            event: 'commented',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
            },
            novl: {
                id: 'novl123',
                title: 'The Great Adventure'
            },
            chapter: {
                id: 'chapter456',
                number: 3
            },
            read: false,
            updatedAt: new Date().toISOString(),
        } as NotificationType,
        locale: 'en',
    },
};

// Membership Request Notification
export const MembershipRequestNotification = {
    args: {
        notification: {
            _id: '3',
            event: 'mrequest',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
            },
            page: {
                name: 'My Page',
            },
            read: false,
            updatedAt: new Date().toISOString(),
        } as NotificationType,
        locale: 'en',
    },
};

// Membership Acceptance Notification
export const MembershipAcceptNotification = {
    args: {
        notification: {
            _id: '4',
            event: 'mrequestaccepted',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
            },
            page: {
                name: 'My Page',
            },
            read: false,
            updatedAt: new Date().toISOString(),
        } as NotificationType,
        locale: 'en',
    },
};

// Membership Rejection Notification
export const MembershipRejectNotification = {
    args: {
        notification: {
            _id: '5',
            event: 'mrequestrejected',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces',
            },
            page: {
                name: 'My Page',
            },
            read: false,
            updatedAt: new Date().toISOString(),
        } as NotificationType,
        locale: 'en',
    },
};

// Unsupported Notification Type
export const UnsupportedNotification = {
    args: {
        notification: {
            _id: '6',
            event: 'unsupported_type',
            creator: {
                _id: 'user123',
                displayName: 'John Doe',
                profileImage: 'https://www.urnovl.co/profile.jpg',
            },
            read: false,
            updatedAt: new Date().toISOString(),
        },
        locale: 'en',
    },
};
