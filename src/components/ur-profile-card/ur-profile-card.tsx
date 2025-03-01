import { Component, Prop, Host, h, State, Element, Event, EventEmitter } from '@stencil/core';
import '../ur-avatar/ur-avatar';

@Component({
    tag: 'ur-profile-card',
    styleUrl: 'ur-profile-card.css',
    shadow: true,
})
export class UrProfileCard {
    @Element()
    el: HTMLElement;

    @Prop()
    avatarSrc: string; // Source for the avatar image

    @Prop()
    avatarAlt: string = 'Avatar'; // Alt text for the avatar image

    @Prop()
    name: string; // Name or title of the user/page

    @Prop()
    avatarSize: string = '24px'; // Size of the avatar

    @Prop()
    description: string; // Description of the user/page

    @Prop()
    followButtonText: string = 'Follow'; // Text for the follow button

    @Prop()
    isOwner: boolean;

    @Prop()
    profileType: 'user' | 'page' = 'user';

    @Prop()
    nameFontSize: string = '12px';

    @Prop()
    unfollowButtonText: string = 'Following'; // Text for the unfollow button

    @Prop()
    buttonHeight: string = '32px';

    @Prop()
    buttonWidth: string = '32px';

    @Prop()
    pageActionsTooltipText: string = 'Remove page from story';

    @Prop()
    memberActionsTooltipText: string = 'Remove member from page';

    @Prop()
    showDescription: boolean = false;

    @Prop()
    showMemberActions: boolean = false;

    @Prop()
    showPageActions: boolean = false;

    @Prop()
    hideFollowActions: boolean = false;

    @State()
    isFollowing: boolean = false;

    @Prop()
    initialFollowState: boolean = false;

    @Event({ bubbles: true })
    profileLinkEvent: EventEmitter;

    @Event({ bubbles: true })
    followEvent: EventEmitter;

    @Event({ bubbles: true })
    unfollowEvent: EventEmitter;

    @Event({ bubbles: true })
    removeMemberEvent: EventEmitter;

    @Event({ bubbles: true })
    removePageEvent: EventEmitter;

    private handleProfileLink = () => {
        this.profileLinkEvent.emit();
        console.log('profileLinkEvent');
    };

    private onFollow = () => {
        this.isFollowing = true;
        this.followEvent.emit();
    };

    private onUnfollow = () => {
        this.isFollowing = false;
        this.unfollowEvent.emit();
    };

    private onRemoveMember = () => {
        this.removeMemberEvent.emit();
    };

    private onRemovePage = () => {
        this.removePageEvent.emit();
    };

    componentDidLoad() {
        this.isFollowing = this.initialFollowState;
    }

    render() {
        return (
            <Host>
                <div class="profile-card">
                    {/* Clickable Avatar */}
                    <div class="profile-container">
                        <ur-avatar
                            size={this.avatarSize}
                            class="avatar"
                            variant={this.profileType}
                            radius={this.profileType === 'page' ? '12px' : '50%'}
                            src={this.avatarSrc}
                            onClick={this.handleProfileLink}
                        ></ur-avatar>

                        <span class="profile-info">
                            {/* Clickable Name */}
                            <span class="name-link" onClick={this.handleProfileLink}>
                                <span class="name" style={{ fontSize: this.nameFontSize }}>
                                    {this.name}
                                </span>
                            </span>

                            {/* Static Description */}
                            {this.showDescription && (
                                <div class="description-container">
                                    <span class="description-text">{this.description}</span>
                                </div>
                            )}
                        </span>
                    </div>

                    <div class="actions-container">
                        {/* Follow/Unfollow Button */}
                        {!this.isOwner && !this.hideFollowActions && (
                            <ur-button
                                buttonHeight={this.buttonHeight}
                                class="follow-button"
                                onClick={this.isFollowing ? this.onUnfollow : this.onFollow}
                                variant={this.isFollowing ? 'text' : 'outlined'}
                            >
                                {this.isFollowing ? this.unfollowButtonText : this.followButtonText}
                            </ur-button>
                        )}

                        {this.profileType === 'user' && this.showMemberActions && (
                            <ur-tooltip content={this.memberActionsTooltipText} placement="bottom" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                                <ur-button-icon buttonHeight={this.buttonHeight} buttonWidth={this.buttonWidth} class="member-actions-button" icon="close" onClick={this.onRemoveMember}>
                                </ur-button-icon>
                            </ur-tooltip>
                        )}

                        {this.profileType === 'page' && this.showPageActions && (
                            <ur-tooltip content={this.pageActionsTooltipText} placement="bottom" trigger="hover" colorScheme="dark" open-delay="200" close-delay="100">
                                <ur-button-icon buttonHeight={this.buttonHeight} buttonWidth={this.buttonWidth} class="page-actions-button" icon="close" onClick={this.onRemovePage}>
                                </ur-button-icon>
                            </ur-tooltip>
                        )}
                    </div>
                </div>
            </Host>
        );
    }
}
