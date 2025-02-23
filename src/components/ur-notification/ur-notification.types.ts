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

// Extensible notification type
export type NotificationType = FollowNotification | CommentNotification;

// Event types
export type NotificationEventType = 'mark_read' | 'profile_click' | 'follow_back' | 'comment_click';

export interface NotificationEvent {
    type: NotificationEventType;
    notification: NotificationType;
}
