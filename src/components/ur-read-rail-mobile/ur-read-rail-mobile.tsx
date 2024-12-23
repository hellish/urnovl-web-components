import { Component, Host, h, Prop, Event, EventEmitter, Watch, Element } from '@stencil/core';

@Component({
    tag: 'ur-read-rail-mobile',
    styleUrl: 'ur-read-rail-mobile.css',
    shadow: true,
})
export class UrReadRailMobile {
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
    isVisible: boolean = true; // Visibility state (default visible)

    // Events
    @Event({ bubbles: true, composed: true })
    likeClicked: EventEmitter<void>; // Triggered when the "Like" button is clicked

    @Event({ bubbles: true, composed: true })
    dislikeClicked: EventEmitter<void>; // Triggered when the "Dislike" button is clicked

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

    // Watch for changes to `isFollowed`
    @Watch('isFollowed')
    handleIsFollowedChange(newValue: boolean) {
        console.log('isFollowed changed to:', newValue);
        // Additional logic can be added if needed
    }

    @Watch('isVisible')
    handleVisibilityChange(newValue: boolean) {
        console.log('isVisible changed to:', newValue);
        this.updateVisibility();
    }

    private updateVisibility() {
        const hostElement = this.el;
        if (this.isVisible) {
            hostElement.classList.remove('hidden');
        } else {
            hostElement.classList.add('hidden');
        }
    }

    // Handlers
    private handleLike() {
        console.log('Like button clicked');
        this.likeClicked.emit();
    }

    private handleDislike() {
        console.log('Dislike button clicked');
        this.dislikeClicked.emit();
    }

    private handleComment() {
        console.log('Comment button clicked');
        this.commentClicked.emit();
    }

    private handleDonate() {
        console.log('Donate button clicked');
        this.donateClicked.emit();
    }

    private handleShare() {
        console.log('Share button clicked');
        this.shareClicked.emit();
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
                    {!this.isFollowed && <ur-button-icon class="follow-btn" icon="add" variant="filled" onClick={() => this.handleFollow()}></ur-button-icon>}
                </div>

                {/* Action Buttons Section */}
                <div class="actions-holder">
                    <div class="action">
                        <ur-button-icon icon="thumb_up--outlined" variant="standard" onClick={() => this.handleLike()}></ur-button-icon>
                        <span class="action-label">{this.likes}</span>
                    </div>
                    <div class="action">
                        <ur-button-icon icon="thumb_down--outlined" variant="standard" onClick={() => this.handleDislike()}></ur-button-icon>
                        <span class="action-label">{this.dislike}</span>
                    </div>
                    <div class="action">
                        <ur-button-icon icon="comment--outlined" variant="standard" onClick={() => this.handleComment()}></ur-button-icon>
                        <span class="action-label">{this.comments}</span>
                    </div>
                    <div class="action">
                        <ur-button-icon icon="volunteer_activism--outlined" variant="standard" onClick={() => this.handleDonate()}></ur-button-icon>
                        <span class="action-label">{this.donate}</span>
                    </div>
                    <div class="action">
                        <ur-button-icon icon="share--outlined" variant="standard" onClick={() => this.handleShare()}></ur-button-icon>
                        <span class="action-label">{this.share}</span>
                    </div>
                </div>
            </Host>
        );
    }
}
