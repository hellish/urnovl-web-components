import { Component, Host, h, Prop, Event, EventEmitter, Watch, Element, State } from '@stencil/core';

@Component({
    tag: 'ur-read-rail',
    styleUrl: 'ur-read-rail.css',
    shadow: true,
})
export class UrReadRail {
    // Reference to the host element
    @Element() el: HTMLElement;

    // Props
    @Prop()
    avatarSrc: string;

    @Prop()
    avatarName: string;

    @Prop()
    likes: number; // Number of likes

    @Prop()
    dislike: string = 'Dislike'; // Dislike text

    @Prop()
    comments: number; // Number of comments

    @Prop()
    donate: string = 'Donate'; // Donate text

    @Prop()
    share: string = 'Share'; // Share text

    @Prop()
    mode: 'desktop' | 'ionic' = 'desktop'; // Default to desktop

    @Prop()
    isFollowed: boolean = false; // Follow state (initial state)

    @Prop()
    isOwnChapter: boolean = false;

    @Prop()
    isChapterPurchased: boolean = false;

    @Prop()
    isNovlDeleted: boolean = false;

    @Prop()
    isAuthorFollowed: boolean = false;

    @Prop()
    isPaidChapter: boolean = false;

    @Prop()
    isAuthorPro: boolean = false;

    @Prop()
    isDonationsEnabled: boolean = true;

    @Prop()
    isHostSmall: boolean; // Default value

    @State()
    isLiked: boolean = false; // Track if the item is liked

    @State()
    isDisliked: boolean = false; // Track if the item is disliked

    @Prop()
    isVisible: boolean = true; // Visibility state (default visible)

    // Events
    @Event({ bubbles: true, composed: true })
    likeClicked: EventEmitter<boolean>; // Accepts a boolean argument

    @Event({ bubbles: true, composed: true })
    dislikeClicked: EventEmitter<boolean>; // Accepts a boolean argument

    @Event({ bubbles: true, composed: true })
    commentClicked: EventEmitter<void>; // Triggered when the "Comment" button is clicked

    @Event({ bubbles: true, composed: true })
    donateClicked: EventEmitter<void>; // Triggered when the "Donate" button is clicked

    @Event({ bubbles: true, composed: true })
    shareClicked: EventEmitter<void>; // Triggered when the "Share" button is clicked

    @Event({ bubbles: true, composed: true })
    followClicked: EventEmitter<void>; // Triggered when the "Follow" button is clicked

    @Event({ bubbles: true, composed: true })
    viewProfileClicked: EventEmitter<void>; // Triggered when the profile avatar is clicked

    @Event({ bubbles: true, composed: true })
    visibilityToggled: EventEmitter<boolean>; // Emit when visibility is toggled

    // Event emitters for social media actions with bubbles
    @Event({ bubbles: true, composed: true })
    facebookShareClicked: EventEmitter<void>;

    @Event({ bubbles: true, composed: true })
    twitterShareClicked: EventEmitter<void>;

    @Event({ bubbles: true, composed: true })
    linkedinShareClicked: EventEmitter<void>;

    @Event({ bubbles: true, composed: true })
    nativeShareClicked: EventEmitter<void>;

    @Watch('avatarSrc')
    @Watch('avatarName')
    @Watch('likes')
    @Watch('dislike')
    @Watch('comments')
    @Watch('donate')
    @Watch('share')
    @Watch('isVisible')
    @Watch('isPaidChapter')
    @Watch('isOwnChapter')
    @Watch('isHostSmall')
    @Watch('isChapterPurchased')
    @Watch('isNovlDeleted')
    @Watch('isAuthorFollowed')
    @Watch('isAuthorPro')
    @Watch('isDonationsEnabled')
    handlePropChange() {
        console.log('Properties changed, re-rendering...');
        if (this.isVisible !== undefined) {
            this.updateVisibility();
        }
        this.render(); // Trigger re-render when observed properties change
    }

    @Watch('isHostSmall')
    handleHostSmallChange(newValue: boolean) {
        console.log('isHostSmall changed in child:', newValue);
    }

    private updateVisibility() {
        const hostElement = this.el;
        if (this.isVisible) {
            hostElement.classList.remove('hidden');
        } else {
            hostElement.classList.add('hidden');
        }
    }

    private handleComment() {
        console.log('Comment button clicked');
        this.commentClicked.emit();
    }

    private handleDonate() {
        console.log('Donate button clicked');
        this.donateClicked.emit();
    }

    private handleFollow() {
        console.log('Follow button clicked');
        this.followClicked.emit();
        this.isFollowed = true; // Update the state to hide the button
    }

    private handleViewProfile() {
        console.log('View profile clicked');
        this.viewProfileClicked.emit();
    }

    private handleFacebookClick() {
        console.log('facebook share clicked');
        this.facebookShareClicked.emit(); // Emit event when Facebook button is clicked
    }

    private handleTwitterClick() {
        console.log('twitter share clicked');
        this.twitterShareClicked.emit(); // Emit event when Twitter button is clicked
    }

    private handleLinkedinClick() {
        console.log('linkedin share clicked');
        this.linkedinShareClicked.emit(); // Emit event when LinkedIn button is clicked
    }

    private handleShare() {
        console.log('native share clicked');
        this.nativeShareClicked.emit(); // Emit event when native share is clicked
    }

    private renderShareButton() {
        if (this.mode === 'desktop') {
            return (
                <div class="action">
                    <ur-tooltip variant="rich" placement={this.isHostSmall ? 'left' : 'right'} trigger="click" color-scheme="light">
                        <ur-button-icon icon="share--outlined" variant="standard"></ur-button-icon>
                        <div slot="rich-content" class="share-options">
                            <ur-button-icon variant="standard" onClick={() => this.handleFacebookClick()}>
                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.21705 8.5216H5.97091V15.7419C5.97091 15.8845 6.08642 16 6.22897 16H9.2027C9.34526 16 9.46077 15.8845 9.46077 15.7419V8.55561H11.477C11.6081 8.55561 11.7184 8.45724 11.7333 8.32702L12.0396 5.66885C12.048 5.59572 12.0248 5.52248 11.9759 5.46761C11.9269 5.4127 11.8568 5.38126 11.7832 5.38126H9.46087V3.71499C9.46087 3.2127 9.73132 2.95799 10.2648 2.95799C10.3408 2.95799 11.7832 2.95799 11.7832 2.95799C11.9258 2.95799 12.0413 2.84243 12.0413 2.69992V0.259974C12.0413 0.117419 11.9258 0.00190968 11.7832 0.00190968H9.6906C9.67584 0.0011871 9.64306 0 9.59475 0C9.23166 0 7.96956 0.0712774 6.97261 0.988439C5.86799 2.0048 6.02154 3.22173 6.05824 3.43272V5.38121H4.21705C4.07449 5.38121 3.95898 5.49672 3.95898 5.63928V8.26348C3.95898 8.40604 4.07449 8.5216 4.21705 8.5216Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </ur-button-icon>

                            <ur-button-icon variant="standard" onClick={() => this.handleTwitterClick()}>
                                <svg viewBox="0 0 512 509.64" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </ur-button-icon>

                            <ur-button-icon variant="standard" onClick={() => this.handleLinkedinClick()}>
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </ur-button-icon>
                        </div>
                    </ur-tooltip>
                    <span class="action-label">{this.share}</span>
                </div>
            );
        } else {
            // Return mobile/ionic share button (placeholder for now)
            return (
                <div class="action">
                    <ur-button-icon icon="share--outlined" variant="standard" onClick={() => this.handleShare()}></ur-button-icon>
                    <span class="action-label">{this.share}</span>
                </div>
            );
        }
    }

    componentWillLoad() {
        this.updateVisibility();
    }

    render() {
        return (
            <Host
                class={{
                    'ur-read-rail': true,
                    'hidden': !this.isVisible, // Apply hidden class when isVisible is false
                }}
            >
                {/* Profile Section */}
                <div class="profile-holder">
                    <ur-avatar class="avatar-button" src={this.avatarSrc} border="4px" size="56px" name={this.avatarName} onClick={() => this.handleViewProfile()}></ur-avatar>

                    {/* Show follow button if not following and chapter is not owned */}
                    {!this.isFollowed && !this.isOwnChapter && <ur-button-icon class="follow-btn" icon="add" variant="filled" onClick={() => this.handleFollow()}></ur-button-icon>}
                </div>

                {/* Action Buttons Section */}
                <div class="actions-holder">
                    <slot name="thumbs-rating"></slot>
                    <div class="action">
                        <ur-button-icon icon="comment--outlined" variant="standard" onClick={() => this.handleComment()}></ur-button-icon>
                        <span class="action-label">{this.comments}</span>
                    </div>
                    {this.isDonationsEnabled && !this.isPaidChapter && !this.isOwnChapter && this.isAuthorPro && (
                        <div class="action">
                            <ur-button-icon icon="volunteer_activism--outlined" variant="standard" onClick={() => this.handleDonate()}></ur-button-icon>
                            <span class="action-label">{this.donate}</span>
                        </div>
                    )}
                    {this.renderShareButton()}
                </div>
            </Host>
        );
    }
}
