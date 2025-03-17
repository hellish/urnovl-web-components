// Base types
export interface Creator {
    _id: string;
    displayName: string;
    profileImage?: string;
}

export interface BaseNotification {
    _id: string;
    read: boolean;
    updatedAt: string;
    creator: Creator;
}

// Follow notification
export interface FollowCreator extends Creator {
    followed: boolean;
}

export interface FollowNotification extends BaseNotification {
    event: 'followed';
    creator: FollowCreator;
}

export interface PageFollowNotification extends BaseNotification {
    event: 'pfollowed';
    creator: FollowCreator;
    page: {
        name: string;
    };
}

// Comment notification
export interface CommentNotification extends BaseNotification {
    event: 'commented';
    creator: Creator;
    novl: {
        id: string;
        title: string;
    };
    chapter: {
        id: string;
        number: number;
    };
}

// Membership Request Notification
export interface MembershipRequestNotification extends BaseNotification {
    event: 'mrequest';
    status: 'pending' | 'accepted' | 'rejected';
    page: {
        name: string;
    };
}

export interface MembershipAcceptNotification extends BaseNotification {
    event: 'mrequestaccepted';
    page: {
        name: string;
    };
}

export interface MembershipRejectNotification extends BaseNotification {
    event: 'mrequestrejected';
    page: {
        name: string;
    };
}

// Extensible notification type
export type NotificationType =
    | FollowNotification
    | PageFollowNotification
    | CommentNotification
    | MembershipRequestNotification
    | MembershipAcceptNotification
    | MembershipRejectNotification;

// Event types
export type NotificationEventType =
    | 'mark_read'
    | 'profile_click'
    | 'follow_back'
    | 'comment_click'
    | 'mrequest_accept'
    | 'mrequest_reject';

export interface NotificationEvent {
    type: NotificationEventType;
    notification: NotificationType;
}
