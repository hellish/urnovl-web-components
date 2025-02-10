import { Component, Event, EventEmitter, Prop, h, Host, State } from '@stencil/core';
import { NotificationType, NotificationEvent, NotificationEventType } from './ur-notification.types';

@Component({
    tag: 'ur-notification',
    styleUrl: 'ur-notification.css',
    shadow: true,
})
export class UrNotification {
    @Prop()
    notification!: NotificationType;

    @State()
    private isRead: boolean;

    @State()
    private isFollowing: boolean;

    @Event()
    notificationEvent: EventEmitter<NotificationEvent>;

    componentWillLoad() {
        this.isRead = this.notification.read;
        if (this.notification.event === 'followed') {
            this.isFollowing = this.notification.creator.followed;
        }
    }

    private emitEvent(type: NotificationEventType) {
        if (!this.isRead && type !== 'mark_read') {
            this.isRead = true;
            this.emitEvent('mark_read');
        }

        if (type === 'follow_back') {
            this.isFollowing = true;
        }

        this.notificationEvent.emit({
            type,
            notification: this.notification,
        });
    }

    private renderFollowNotification() {
        if (this.notification.event !== 'followed') return null;

        const { creator } = this.notification;

        return [
            <section class="vert">
                <ur-avatar class="profile" onClick={() => this.emitEvent('profile_click')} src={creator.profileImage} name={creator.displayName} size="40px" />
                <section class="content" onClick={() => this.emitEvent('profile_click')}>
                    <div class="message">{creator.displayName} has followed you.</div>
                    <div class="ago">
                        <ur-time-ago date={this.notification.updatedAt} />
                    </div>
                </section>
            </section>,
            !this.isFollowing && (
                <ur-button class="action followb" variant="filled" onClick={() => this.emitEvent('follow_back')}>
                    Follow back
                </ur-button>
            )
        ];
    }

    private renderCommentNotification() {
        if (this.notification.event !== 'commented') return null;

        const { creator, novl, chapter } = this.notification;

        return (
            <section class="vert">
                <ur-avatar class="profile" onClick={() => this.emitEvent('profile_click')} src={creator.profileImage} name={creator.displayName} size="40px" />
                <section class="content" onClick={() => this.emitEvent('comment_click')}>
                    <div class="message">
                        {creator.displayName} has commented in chapter {chapter.number} of novl <b>{novl.title}</b>.
                    </div>
                    <div class="ago">
                        <ur-time-ago date={this.notification.updatedAt} />
                    </div>
                </section>
            </section>
        );
    }

    render() {
        return (
            <Host
                class={{
                    'notification': true,
                    'notification--read': this.isRead,
                }}
            >
                {(() => {
                    switch (this.notification.event) {
                        case 'followed':
                            return this.renderFollowNotification();
                        case 'commented':
                            return this.renderCommentNotification();
                        default:
                            return <div class="unsupported">Unsupported notification type: {(this.notification as any).event}</div>;
                    }
                })()}
            </Host>
        );
    }
}
