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

    @State()
    private memberRequestStatus: 'pending' | 'accepted' | 'rejected';

    @Event()
    notificationEvent: EventEmitter<NotificationEvent>;

    componentWillLoad() {
        this.isRead = this.notification.read;
        if (this.notification.event === 'mrequest') {
            this.memberRequestStatus = this.notification.status;
        }
        if (this.notification.event === 'followed') {
            this.isFollowing = (this.notification as any).creator.followed;
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

    private handleAcceptMembershipRequest() {
        this.memberRequestStatus = 'accepted';
        this.emitEvent('mrequest_accept');
    }

    private handleRejectMembershipRequest() {
        this.memberRequestStatus = 'rejected';
        this.emitEvent('mrequest_reject');
    }

    private renderFollowNotification() {
        if (this.notification.event !== 'followed') return null;

        const { creator } = this.notification as any;

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

    private renderPageFollowNotification() {
        if (this.notification.event !== 'pfollowed') return null;

        const { creator, page } = this.notification as any;

        return (
            <section class="vert">
                <ur-avatar class="profile" onClick={() => this.emitEvent('profile_click')} src={creator.profileImage} name={creator.displayName} size="40px" />
                <section class="content" onClick={() => this.emitEvent('profile_click')}>
                    <div class="message">{creator.displayName} has followed your page <b>{page.name}</b>.</div>
                    <div class="ago">
                        <ur-time-ago date={this.notification.updatedAt} />
                    </div>
                </section>
            </section>
        );
    }

    private renderCommentNotification() {
        if (this.notification.event !== 'commented') return null;

        const { creator, novl, chapter } = this.notification as any;

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

    private renderMembershipRequestNotification() {
        if (this.notification.event !== 'mrequest') return null;

        const { creator, page } = this.notification;

        return (
            <section class="vert">
                <ur-avatar class="profile" onClick={() => this.emitEvent('profile_click')} src={creator.profileImage} name={creator.displayName} size="40px" />
                <section class="content" onClick={() => this.emitEvent('profile_click')}>
                    <div class="message">
                        {this.memberRequestStatus === 'pending'
                            ? `${creator.displayName} has requested to become a member to ${page.name}`
                            : `You ${this.memberRequestStatus} ${creator.displayName} as a member to ${page.name}`}
                    </div>
                    <div class="ago">
                        <ur-time-ago date={this.notification.updatedAt} />
                    </div>
                </section>
                {this.memberRequestStatus === 'pending' && [
                    <ur-button class="action accept" variant="filled" onClick={() => this.handleAcceptMembershipRequest()}>
                        Accept
                    </ur-button>,
                    <ur-button class="action reject" variant="outlined" onClick={() => this.handleRejectMembershipRequest()}>
                        Reject
                    </ur-button>
                ]}
            </section>
        );
    }

    private renderMembershipDecisionNotification() {
        if (this.notification.event !== 'mrequestaccepted' && this.notification.event !== 'mrequestrejected') return null;

        const { creator, page } = this.notification;

        return (
            <section class="vert">
                <ur-avatar class="profile" onClick={() => this.emitEvent('profile_click')} src={creator.profileImage} name={creator.displayName} size="40px" />
                <section class="content" onClick={() => this.emitEvent('profile_click')}>
                    <div class="message">
                        {creator.displayName} has {this.notification.event === 'mrequestaccepted' ? 'accepted' : 'rejected'} your
                        membership request to {page.name}.
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
                        case 'pfollowed':
                            return this.renderPageFollowNotification();
                        case 'commented':
                            return this.renderCommentNotification();
                        case 'mrequest':
                            return this.renderMembershipRequestNotification();
                        case 'mrequestaccepted':
                        case 'mrequestrejected':
                            return this.renderMembershipDecisionNotification();
                        default:
                            return <div class="unsupported">Unsupported notification type: {(this.notification as any).event}</div>;
                    }
                })()}
            </Host>
        );
    }
}
