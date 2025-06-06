import { Component, Event, Host, Prop, State, h, EventEmitter, Watch } from '@stencil/core';
import { Icons } from './icons';

import { PageMemberEvent } from '../../models/page';

import '../ur-avatar/ur-avatar';
import '../ur-button/ur-button';
import '../ur-time-ago/ur-time-ago';

@Component({
    tag: 'ur-page-profile',
    styleUrl: 'ur-page-profile.css',
    shadow: true,
})
export class UrPageProfile {

    @Prop()
    pageId: string;

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
    phone = null;

    @Prop()
    website = null;

    @Prop()
    stories: number | null = null;

    @Prop()
    views: number | null = null;

    @Prop()
    pageCreatedText = 'Page created';

    @Prop()
    following: number | null = null;

    @Prop()
    followers: number | null = null;

    @Prop()
    members: number | null = null;

    @Prop()
    showFollow = false;

    @Prop()
    websiteText = 'Visit website';

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
    isPageOwner = false;

    @Prop()
    pageCreatorName = null;

    @Prop()
    pageCreatorImage = null;

    @Prop()
    pageType: string | null = null;

    @Prop()
    pageCreationDate = null;

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
    membersText = 'Members';

    @Prop()
    followText = 'Follow';

    @Prop()
    becomeMemberText = 'Become a Member';

    @Prop()
    donateText = 'Donate';

    @Prop()
    sendMessageText = 'Message';

    @Prop()
    followed = false;

    @Prop({ mutable: true })
    memberRequestStatus: 'idle' | 'pending' | 'accepted' | 'rejected' = 'idle';

    // All events remain the same
    @Event()
    member;

    @State()
    memberButtonHoverState: 'default' | 'hover' = 'default';

    @Event()
    donate;

    @Event()
    sendMessage;

    @Event()
    followersClick;

    @Event()
    membersClick;

    @Event()
    facebookClick;

    @Event()
    twitterClick;

    @Event()
    linkedinClick;

    @Event()
    emailClick;

    @Event()
    phoneClick;

    @Event()
    websiteClick;

    @Event()
    pageCreatorClick;

    @Event({ bubbles: true, composed: true })
    pageFollowClicked: EventEmitter<[string, boolean]>;

    @Event()
    pageMemberClicked: EventEmitter<PageMemberEvent>;

    @Watch('followed')
    handleFollowedChanged() {
        this.updateFollowText();
    }

    componentWillLoad() {
        this.updateFollowText();
    }

    private handleBecomeMemberClicked() {
        if (this.memberRequestStatus === 'pending') {
            // Emit cancel event for pending request
            this.pageMemberClicked.emit({
                pageId: this.pageId,
                status: 'canceled'
            });
        } else if (this.memberRequestStatus === 'accepted') {
            // Emit leave event for current member
            this.pageMemberClicked.emit({
                pageId: this.pageId,
                status: 'leave'
            });
        } else if (this.memberRequestStatus === 'idle' || this.memberRequestStatus === 'rejected') {
            // Emit pending event for new request
            this.pageMemberClicked.emit({
                pageId: this.pageId,
                status: 'pending'
            });
        }
    }

    private getBecomeMemberButtonText() {
        switch (this.memberRequestStatus) {
            case 'pending':
                return this.memberButtonHoverState === 'hover'
                    ? 'Cancel Request'
                    : 'Request Pending';
            case 'accepted':
                return this.memberButtonHoverState === 'hover'
                    ? 'Cancel Membership'
                    : 'You\'re a Member';
            case 'rejected':
                return this.becomeMemberText;
            default:
                return this.becomeMemberText;
        }
    }

    private updateFollowText() {
        this.followText = this.followed ? 'Unfollow' : 'Follow';
    }

    private handleFollowClicked($event: Event) {
        $event.stopPropagation();
        $event.preventDefault();
        this.pageFollowClicked.emit([ this.pageId, this.followed ]);
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
                                <ur-avatar border="4px" radius="25px" size="96px" src={this.avatar} name={this.name}></ur-avatar>
                            </div>
                            <div class="info">
                                <div class="name">{this.name}</div>
                                {this.renderPageType()}
                                {this.about && <div class="about">{this.about}</div>}
                                {this.renderLocation()}
                                {this.renderSocialLinks()}
                                {this.renderWebsite()}
                            </div>
                            {this.renderActions()}
                        </div>
                    )}

                    {this.platform === 'desktop' && [
                        this.renderStats(),
                        this.renderLanguages(),
                        this.renderGenres(),
                        this.renderLiteratureTypes(),
                        this.renderPageCreator(),
                        this.renderPageCreationDate(),
                    ]}

                    {this.platform === 'mobile-main' && (
                        <div class="mobile-main-content">
                            <div class="avatar">
                                <ur-avatar border="4px" radius="25px" size="96px" src={this.avatar} name={this.name}></ur-avatar>
                            </div>
                            <div class="info">
                                <div class="name">{this.name}</div>
                                {this.renderPageType()}
                                {this.about && <div class="about">{this.about}</div>}
                            </div>
                            {this.renderActions()}
                        </div>
                    )}

                    {this.platform === 'mobile-secondary' && [
                        this.renderLocation(),
                        this.renderSocialLinks(),
                        this.renderWebsite(),
                        this.renderStats(),
                        this.renderLanguages(),
                        this.renderGenres(),
                        this.renderLiteratureTypes(),
                        this.renderPageCreator(),
                        this.renderPageCreationDate(),
                    ]}
                </div>
            </Host>
        );
    }

    private renderLocation() {
        if (!this.location) return null;
        return <div class="location">{this.location}</div>;
    }

    private renderPageType() {
        if (!this.pageType) return null;
        return <div class="page-type">{this.pageType}</div>;
    }

    private renderSocialLinks() {
        if (!this.facebook_url && !this.twitter_url && !this.linkedin_url && !this.email && !this.phone) {
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
                {this.phone && (
                    <a onClick={() => this.phoneClick.emit()} title="phone">
                        <span class="icon" innerHTML={Icons.phone}></span>
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
        return (
            <div class={`actions ${this.platform === 'mobile-main' ? 'actions--mobile-main' : ''}`}>
                {this.showFollow && (
                    <ur-button class="follow" onClick={($event) => this.handleFollowClicked($event)}>
                        {this.followText}
                    </ur-button>
                )}
                {this.showBecomeMember && !this.isPageOwner && (
                    <ur-button
                        class="follow"
                        variant="outlined"
                        onMouseEnter={() => this.memberButtonHoverState = 'hover'}
                        onMouseLeave={() => this.memberButtonHoverState = 'default'}
                        onClick={() => this.handleBecomeMemberClicked()}
                    >
                        {this.getBecomeMemberButtonText()}
                    </ur-button>
                )}
                {this.showDonate && !this.isPageOwner && (
                    <ur-button class="follow" variant="outlined" onClick={() => this.donate.emit()}>
                        {this.donateText}
                    </ur-button>
                )}
                {this.showSendMessage && !this.isPageOwner && (
                    <ur-button class="follow" variant="outlined" onClick={() => this.sendMessage.emit()}>
                        {this.sendMessageText}
                    </ur-button>
                )}
            </div>
        );
    }

    private renderStats() {
        return (
            <div class="stats">
                {(
                    <div>
                        <div class="stat">
                            <div class="key">{this.storiesText}</div>
                            <div class="value">{this.stories}</div>
                        </div>
                    </div>
                )}
                {(
                    <div>
                        <div class="stat">
                            <div class="key">{this.viewsText}</div>
                            <div class="value">{this.views}</div>
                        </div>
                    </div>
                )}
                {(
                    <div>
                        <div class="stat">
                            <div class="key">{this.followersText}</div>
                            <div class="value clickable" onClick={() => this.followersClick.emit()}>
                                {this.followers}
                            </div>
                        </div>
                    </div>
                )}
                {(
                    <div>
                        <div class="stat">
                            <div class="key">{this.membersText}</div>
                            <div class="value clickable" onClick={() => this.membersClick.emit()}>
                                {this.members}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    private renderLanguages() {
        if (!this.languages) return null;
        return (
            <div class="languages">
                <div class="category">{this.languagesText}</div>
                <div class="items">
                    {this.languages.split(',').map(language => (
                        <ur-chip fontColor="rgb(var(--ur-color-on-surface-lite))" backColor="rgb(var(--ur-color-surface-container-high))" size="24px" class="chip" clickable={false} label={language}></ur-chip>
                    ))}
                </div>
            </div>
        );
    }

    private renderGenres() {
        if (!this.genres) return null;
        return (
            <div class="genres">
                <div class="category">{this.genresText}</div>
                <div class="items">
                    {this.genres.split(',').map(genre => (
                        <ur-chip fontColor="rgb(var(--ur-color-on-surface-lite))" backColor="rgb(var(--ur-color-surface-container-high))" size="24px" class="chip" clickable={false} label={genre}></ur-chip>
                    ))}
                </div>
            </div>
        );
    }

    private renderLiteratureTypes() {
        if (!this.literatureTypes) return null;
        return (
            <div class="literature-types">
                <div class="category">{this.literatureTypesText}</div>
                <div class="items">
                    {this.literatureTypes.split(',').map(litType => (
                        <ur-chip fontColor="rgb(var(--ur-color-on-surface-lite))" backColor="rgb(var(--ur-color-surface-container-high))" size="24px" class="chip" clickable={false} label={litType}></ur-chip>
                    ))}
                </div>
            </div>
        );
    }

    private renderPageCreator() {
        if (!this.pageCreatorName && !this.pageCreatorImage) return null;
        return (
            <div class="created-by">
                <div class="category">{this.createdByText}</div>
                <div class="person" onClick={() => this.pageCreatorClick.emit()}>
                    <ur-avatar name={this.pageCreatorName} src={this.pageCreatorImage}></ur-avatar>
                    <div>{this.pageCreatorName}</div>
                </div>
            </div>
        );
    }

    private renderPageCreationDate() {
        if (!this.pageCreationDate) return null;
        return (
            <div class="page-creation-date">
                {this.pageCreatedText} <ur-time-ago date={this.pageCreationDate}></ur-time-ago>
            </div>
        );
    }
}
