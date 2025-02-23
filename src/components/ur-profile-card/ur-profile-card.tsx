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
    avatarAlt = 'Avatar'; // Alt text for the avatar image

    @Prop()
    name: string; // Name or title of the user/page

    @Prop()
    avatarSize = '24px'; // Size of the avatar

    @Prop()
    description: string; // Description of the user/page

    @Prop()
    followButtonText = 'Follow'; // Text for the follow button

    @Prop()
    isOwner: boolean;

    @Prop()
    profileType: 'user' | 'page' = 'user';

    @Prop()
    nameFontSize = '12px';

    @Prop()
    unfollowButtonText = 'Following'; // Text for the unfollow button

    @Prop()
    buttonHeight = '32px';

    @Prop()
    showDescription = false;

    @State()
    isFollowing = false; // State to manage follow/unfollow

    @Event({ bubbles: true })
    profileLinkEvent: EventEmitter<void>;

    @Event({ bubbles: true })
    followEvent: EventEmitter<void>;

    @Event({ bubbles: true })
    unfollowEvent: EventEmitter<void>;

    private handleProfileLink = () => {
        this.profileLinkEvent.emit();
    };

    private onFollow = () => {
        this.isFollowing = true;
        this.followEvent.emit();
    };

    private onUnfollow = () => {
        this.isFollowing = false;
        this.unfollowEvent.emit();
    };

    render() {
        return (
            <Host>
                <div class="profile-card">
                    {/* Clickable Avatar */}
                    <div class="profile-container">
                        <ur-avatar
                            size={this.avatarSize}
                            class="avatar"
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

                    {/* Follow/Unfollow Button */}
                    {!this.isOwner && (
                        <ur-button
                            buttonHeight={this.buttonHeight}
                            class="follow-button"
                            onClick={this.isFollowing ? this.onUnfollow : this.onFollow}
                            variant={this.isFollowing ? 'text' : 'outlined'}
                        >
                            {this.isFollowing ? this.unfollowButtonText : this.followButtonText}
                        </ur-button>
                    )}
                </div>
            </Host>
        );
    }
}
