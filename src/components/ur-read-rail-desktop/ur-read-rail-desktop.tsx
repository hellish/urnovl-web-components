import { Component, Host, h, Prop, Event, EventEmitter, Watch, Element, State } from '@stencil/core';

@Component({
    tag: 'ur-read-rail-desktop',
    styleUrl: 'ur-read-rail-desktop.css',
    shadow: true,
})
export class UrReadRail {
    // Reference to the host element
    @Element() el: HTMLElement;

    // Props
    @Prop()
    avatarSrc: string = 'https://i.pravatar.cc/150?img=3'; // Avatar image source

    @Prop()
    avatarName: string = 'Jane Doe'; // Avatar name

    @Prop()
    likes: string = '1.5k'; // Number of likes

    @Prop()
    dislike: string = 'Dislike'; // Dislike text

    @Prop()
    comments: number = 15; // Number of comments

    @Prop()
    donate: string = 'Donate'; // Donate text

    @Prop()
    share: string = 'Share'; // Share text

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
    isDonationsEnabled: boolean = false;

    @Prop()
    isHostSmall: boolean = false; // Default value

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
    handleHostSmallChange(newValue: boolean, oldValue: boolean) {
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

    private handleLike() {
        this.isLiked = !this.isLiked;
        if (this.isLiked) {
            this.isDisliked = false;
        }
        this.likeClicked.emit(this.isLiked); // Emit the updated like state
    }

    private handleDislike() {
        this.isDisliked = !this.isDisliked;
        if (this.isDisliked) {
            this.isLiked = false;
        }
        this.dislikeClicked.emit(this.isDisliked); // Emit the updated dislike state
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
                    <div class="action">
                        <ur-button-icon
                            icon={this.isLiked ? 'thumb_up' : 'thumb_up--outlined'}
                            selectedIcon="thumb_up"
                            selected={this.isLiked}
                            onClick={() => this.handleLike()}
                        ></ur-button-icon>
                        <span class="action-label">{this.likes}</span>
                    </div>
                    <div class="action">
                        <ur-button-icon
                            icon={this.isDisliked ? 'thumb_down' : 'thumb_down--outlined'}
                            selectedIcon="thumb_down"
                            selected={this.isDisliked}
                            onClick={() => this.handleDislike()}
                        ></ur-button-icon>
                        <span class="action-label">{this.dislike}</span>
                    </div>
                    {!this.isPaidChapter && !this.isOwnChapter && this.isAuthorPro && (
                        <div class="action">
                            <ur-button-icon icon="volunteer_activism--outlined" variant="standard" onClick={() => this.handleDonate()}></ur-button-icon>
                            <span class="action-label">{this.donate}</span>
                        </div>
                    )}
                    <div class="action">
                        <ur-button-icon icon="volunteer_activism--outlined" variant="standard" onClick={() => this.handleDonate()}></ur-button-icon>
                        <span class="action-label">{this.donate}</span>
                    </div>
                    <div class="action">
                        <ur-tooltip variant="rich" placement={this.isHostSmall ? 'left' : 'right'} trigger="click" color-scheme="light">
                            <ur-button-icon icon="share--outlined" variant="standard"></ur-button-icon>
                            <div slot="rich-content" class="share-options">
                                <ur-button-icon icon="/assets/images/facebook.svg" variant="standard" onClick={() => this.handleFacebookClick()}></ur-button-icon>
                                <ur-button-icon icon="/assets/images/twitter.svg" variant="standard" onClick={() => this.handleTwitterClick()}></ur-button-icon>
                                <ur-button-icon icon="/assets/images/linkedin.svg" variant="standard" onClick={() => this.handleLinkedinClick()}></ur-button-icon>
                            </div>
                        </ur-tooltip>
                        <span class="action-label">{this.share}</span>
                    </div>
                </div>
            </Host>
        );
    }
}
