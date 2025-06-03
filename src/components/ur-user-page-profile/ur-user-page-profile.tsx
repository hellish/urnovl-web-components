import { Component, Event, Host, Prop, Watch, h } from '@stencil/core';
import { Icons } from './icons';

import '../ur-avatar/ur-avatar';
import '../ur-button/ur-button';
import '../ur-time-ago/ur-time-ago';

@Component({
    tag: 'ur-user-page-profile',
    styleUrl: 'ur-user-page-profile.css',
    shadow: true,
})
export class UrUserPageProfile {
    @Prop()
    platform: 'desktop' | 'mobile-main' | 'mobile-secondary' = 'desktop';

    @Prop()
    avatar;

    @Prop()
    name;

    @Prop()
    about = null;

    @Prop()
    location = null;

    @Prop()
    facebook_url = null;

    @Prop()
    twitter_url = null;

    @Prop()
    linkedin_url = null;

    @Prop()
    email = null;

    @Prop()
    website = null;

    @Prop()
    stories: number | null = null;

    @Prop()
    views: number | null = null;

    @Prop()
    userProfileCreatedText = 'Joined';

    @Prop()
    following: number | null = null;

    @Prop()
    followers: number | null = null;

    @Prop()
    members: number | null = null;

    @Prop()
    showFollow = false;

    @Prop()
    isProfileFollowed = false;

    @Prop()
    unFollowText = 'Unfollow';

    @Prop()
    websiteText = 'Visit website';

    @Prop()
    writerText = 'Reader & Writer';

    @Prop()
    readerText = 'Reader';

    @Prop()
    isLoggedIn = true;

    @Prop()
    showBecomeMember = false;

    @Prop()
    showDonate = false;

    @Prop()
    showSendMessage = false;

    @Prop()
    languages: string | null = null;

    @Prop()
    genres: string | null = null;

    @Prop()
    literatureTypes: string | null = null;

    @Prop()
    isProfileOwner = false;

    @Prop()
    pageCreatorName = null;

    @Prop()
    pageCreatorImage = null;

    @Prop()
    isWriter: boolean = false;

    @Prop()
    userProfileCreatedDate = null;

    @Prop()
    createdByText = 'Created by';

    @Prop()
    literatureTypesText = 'Literature Types';

    @Prop()
    genresText = 'Genres';

    @Prop()
    languagesText = 'Languages';

    @Prop()
    viewsText = 'Views';

    @Prop()
    storiesText = 'Stories';

    @Prop()
    followersText = 'Followers';

    @Prop()
    followingText = 'Following';

    @Prop()
    pagesFollowingText = 'Pages Following';

    @Prop()
    pagesFollowing: number | null = null;

    @Prop()
    logoutText = 'Logout';

    @Prop()
    followText = 'Follow';

    @Prop()
    donateText = 'Donate';

    @Event()
    follow;

    @Event()
    donate;

    @Event()
    logout;

    @Event()
    followersClick;

    @Event()
    followingClick;

    @Event()
    unfollow;

    @Event()
    facebookClick;

    @Event()
    twitterClick;

    @Event()
    linkedinClick;

    @Event()
    emailClick;

    @Event()
    websiteClick;

    @Event()
    pagesFollowingClick;

    private handleFollow() {
        this.followers = Math.max(0, this.followers + 1); // Ensure followers >= 0
        this.isProfileFollowed = true;
        this.follow.emit();
    }

    private handleUnfollow() {
        this.followers = Math.max(0, this.followers - 1); // Ensure followers >= 0
        this.isProfileFollowed = false;
        this.unfollow.emit();
    }

    @Watch('isProfileFollowed')
    handleIsProfileFollowedChange(newValue: boolean, oldValue: boolean) {
        console.log('isProfileFollowed changed from', oldValue, 'to', newValue);
    }

    render() {
        const classes = {
            'profile': true,
            'profile-desktop': this.platform === 'desktop',
            'profile-mobile-main': this.platform === 'mobile-main',
            'profile-mobile-secondary': this.platform === 'mobile-secondary',
        };

        return (
            <Host class={classes}>
                <div class={classes}>
                    {/* Desktop Version */}
                    {this.platform === 'desktop' && (
                        <div class="desktop-content">
                            <div class="avatar">
                                <ur-avatar border="4px" radius="50px" size="96px" src={this.avatar} name={this.name}></ur-avatar>
                            </div>
                            <div class="info">
                                <div class="name">{this.name}</div>
                                {this.renderProfileType()}
                                {this.about && <div class="about">{this.about}</div>}
                                {this.renderLocation()}
                                {this.renderSocialLinks()}
                                {this.renderWebsite()}
                            </div>
                            {this.isLoggedIn && this.renderActions()}
                        </div>
                    )}
                    {this.platform === 'desktop' && [
                        this.renderStats(),
                        this.renderUserCreationDate(),
                        this.renderLogoutAction(),
                    ]}

                    {/* Mobile Main Version - Only shows avatar, title, actions */}
                    {this.platform === 'mobile-main' && (
                        <div class="mobile-main-content">
                            <div class="avatar">
                                <ur-avatar border="4px" radius="50px" size="96px" src={this.avatar} name={this.name}></ur-avatar>
                            </div>
                            <div class="info">
                                <div class="name">{this.name}</div>
                                {this.renderProfileType()}
                                {this.about && <div class="about">{this.about}</div>}
                            </div>
                            {this.isLoggedIn && this.renderActions()}
                        </div>
                    )}

                    {/* Stats and additional sections - hidden in mobile-main */}
                    {this.platform === 'mobile-secondary' && [
                        this.renderLocation(),
                        this.renderSocialLinks(),
                        this.renderWebsite(),
                        this.renderStats(),
                        this.renderUserCreationDate(),
                        this.renderLogoutAction(),
                    ]}
                </div>
            </Host>
        );
    }

    private renderLocation() {
        if (!this.location) return null;
        return <div class="location">{this.location}</div>;
    }

    private renderProfileType() {
        return this.isWriter ? <div class="profile-type">{this.writerText}</div> : <div class="profile-type">{this.readerText}</div>;
    }

    private renderSocialLinks() {
        if (!this.facebook_url && !this.twitter_url && !this.linkedin_url && !this.email) {
            return null;
        }

        return (
            <div class="social">
                {this.facebook_url && (
                    <a onClick={() => this.facebookClick.emit()} title="facebook">
                        <span class="icon" innerHTML={Icons.facebook}></span>
                    </a>
                )}
                {this.twitter_url && (
                    <a onClick={() => this.twitterClick.emit()} title="twitter">
                        <span class="icon" innerHTML={Icons.twitter}></span>
                    </a>
                )}
                {this.linkedin_url && (
                    <a onClick={() => this.linkedinClick.emit()} title="linkedin">
                        <span class="icon" innerHTML={Icons.linkedin}></span>
                    </a>
                )}
                {this.email && (
                    <a onClick={() => this.emailClick.emit()} title="email">
                        <span class="icon" innerHTML={Icons.email}></span>
                    </a>
                )}
            </div>
        );
    }

    private renderWebsite() {
        if (!this.website) return null;
        return (
            <a class="website" onClick={() => this.websiteClick.emit()} title="website">
                <span class="icon" innerHTML={Icons.website}></span>
                {this.websiteText}
            </a>
        );
    }

    private renderActions() {
        if (!this.isLoggedIn) return null;
        return (
            <div class={`actions ${this.platform === 'mobile-main' ? 'actions--mobile-main' : ''}`}>
                {!this.isProfileFollowed && !this.isProfileOwner && (
                    <ur-button class="follow" variant="filled" onClick={() => this.handleFollow()}>
                        {this.followText}
                    </ur-button>
                )}
                {this.isProfileFollowed && !this.isProfileOwner && (
                    <ur-button class="follow" variant="outlined" onClick={() => this.handleUnfollow()}>
                        {this.unFollowText}
                    </ur-button>
                )}
                {this.showDonate && !this.isProfileOwner && (
                    <ur-button class="follow" variant="outlined" onClick={() => this.donate.emit()}>
                        {this.donateText}
                    </ur-button>
                )}
            </div>
        );
    }

    private renderLogoutAction() {
        if (!this.isLoggedIn) return null;
        return (
            <div class={`actions ${this.platform === 'mobile-main' ? 'actions--mobile-main' : ''}`}>
                {this.isProfileOwner && (
                    <ur-button class="logout" variant="text" onClick={() => this.logout.emit()}>
                        {this.logoutText}
                    </ur-button>
                )}
            </div>
        );
    }

    private renderStats() {
        return (
            <div class="stats">
                {
                    <div>
                        <div class="stat">
                            <div class="key">{this.storiesText}</div>
                            <div class="value">{this.stories}</div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div class="stat">
                            <div class="key">{this.viewsText}</div>
                            <div class="value">{this.views}</div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div class="stat">
                            <div class="key">{this.followersText}</div>
                            <div class="value clickable" onClick={() => this.followersClick.emit()}>
                                {this.followers}
                            </div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div class="stat">
                            <div class="key">{this.followingText}</div>
                            <div class="value clickable" onClick={() => this.followingClick.emit()}>
                                {this.following}
                            </div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div class="stat">
                            <div class="key">{this.pagesFollowingText}</div>
                            <div class="value clickable" onClick={() => this.pagesFollowingClick.emit()}>
                                {this.pagesFollowing}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

    private renderUserCreationDate() {
        if (!this.userProfileCreatedDate) return null;
        return (
            <div class="user-profile-created-date">
                {this.userProfileCreatedText} <ur-time-ago date={this.userProfileCreatedDate}></ur-time-ago>
            </div>
        );
    }
}
