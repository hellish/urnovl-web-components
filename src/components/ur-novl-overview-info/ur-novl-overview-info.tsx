import { Component, Host, Prop, h, Event, EventEmitter, Method } from '@stencil/core';

import '../ur-time-ago/ur-time-ago';
import '../ur-chip/ur-chip';
import '../ur-long-description/ur-long-description';
import '../ur-profile-card/ur-profile-card';
import '../ur-switch/ur-switch';

@Component({
    tag: 'ur-novl-overview-info',
    styleUrl: 'ur-novl-overview-info.css',
    shadow: true,
})
export class UrNovlOverviewInfo {
    @Prop()
    novlTitle = 'This is long story title';

    @Prop()
    coverImage: string;

    @Prop()
    completeText = 'Complete';

    @Prop()
    ongoingText = 'Ongoing';

    @Prop()
    storyCompleteStatus: boolean;

    @Prop()
    likes: number;

    @Prop()
    deviceSize: 'large' | 'small' = 'large';

    @Prop()
    likesText: string = 'Likes';

    @Prop()
    views: number;

    @Prop()
    viewsText: string = 'Views';

    @Prop()
    readingDuration: string = '1min';

    @Prop()
    readingDurationText: string = 'Reading Duration';

    @Prop()
    description: string = 'Description';

    @Prop()
    languages: string = 'English';

    @Prop()
    genres: string = 'Action, Adventure';

    @Prop()
    literatureTypes: string = 'Novel';

    @Prop()
    showLessText: string = 'Show less';

    @Prop()
    showMoreText: string = 'Show more...';

    @Prop()
    readStoryText: string = 'Read story';

    @Prop()
    writeStoryText: string = 'Start writing';

    @Prop()
    descriptionText: string = 'Description';

    @Prop()
    chapterListText: string = 'Chapters';

    @Prop()
    buyStoryText: string = 'Buy for';

    @Prop()
    novlPrice: string;

    @Prop()
    hasBranches: boolean;

    @Prop()
    writeEnabled: boolean;

    @Prop()
    novlPaid: boolean;

    @Prop()
    novlPurchasedAt: string = '';

    @Prop()
    isOwner: boolean = false;

    @Event()
    readStoryEvent: EventEmitter;

    @Event()
    writeStoryEvent: EventEmitter;

    @Event()
    buyStoryEvent: EventEmitter;

    @Prop()
    ownerAvatar: string;

    @Prop()
    ownerName: string;

    @Prop()
    visibility: 'public' | 'private' = 'public';

    @Prop()
    visibilityPublicText: string = 'Public story';

    @Prop()
    visibilityPrivateText: string = 'Private story';

    @Prop()
    completeStoryText: string = 'Complete story';

    @Prop()
    revertStoryText: string = 'Revert to ongoing';

    @Prop()
    expanded: boolean = false;

    @Prop()
    showPublishedButton: boolean = true;

    @Event()
    editDescriptionEvent: EventEmitter;

    @Event()
    editTitleEvent: EventEmitter;

    @Event()
    visibilityChangeEvent: EventEmitter;

    @Event()
    completeStoryEvent: EventEmitter;

    @Event()
    revertStoryEvent: EventEmitter;

    onReadStory() {
        this.readStoryEvent.emit();
    }

    onWriteStory() {
        this.writeStoryEvent.emit();
    }

    onBuyStory() {
        this.buyStoryEvent.emit();
    }

    onEditDescription() {
        this.editDescriptionEvent.emit();
    }

    onEditTitle() {
        this.editTitleEvent.emit();
    }

    onChangeVisibility() {
        this.visibility = this.visibility === 'public' ? 'private' : 'public';
        this.visibilityChangeEvent.emit(this.visibility);
    }

    onCompleteStory() {
        this.completeStoryEvent.emit();
    }

    onRevertStory() {
        this.revertStoryEvent.emit();
    }

    @Method()
    async reset() {
        this.expanded = false;
    }

    render() {
        return (
            <Host>
                <div class={`overview ${this.deviceSize === 'small' ? 'small-device' : 'large-device'}`}>
                    <div class="cover">
                        <div class="inner-cover-hld">
                            <div class="inner-cover">
                                <img class="cover-image" src={this.coverImage} alt="Novl Cover" />
                            </div>
                            {this.isOwner && this.renderVisibilitySwitch()}
                        </div>
                    </div>

                    <div class="novl-content">
                        <div class="main-content">
                            <div class="upper-hld">
                                {this.renderStatusChips()}

                                <div class="title-hld">
                                    <h1 class="title-text">{this.novlTitle}</h1>
                                    {this.isOwner && (
                                        <ur-tooltip colorScheme="dark" placement="left" content="Edit title">
                                            <ur-button-icon
                                                buttonHeight="30px"
                                                buttonWidth="30px"
                                                class="edit-button"
                                                icon="edit"
                                                onClick={() => this.onEditTitle()}
                                            ></ur-button-icon>
                                        </ur-tooltip>
                                    )}
                                </div>
                            </div>

                            <span class="story-stats">
                                {this.likes > 0 && (
                                    <span class="story-stat">
                                        <span class="story-stat-value">{this.likes}</span>
                                        <span class="story-stat-label">{this.likesText}</span>
                                    </span>
                                )}
                                {this.likes > 0 && <span class="story-stat-separator">&middot;</span>}
                                {this.views > 0 && (
                                    <span class="story-stat">
                                        <span class="story-stat-value">{this.views}</span>
                                        <span class="story-stat-label">{this.viewsText}</span>
                                    </span>
                                )}
                                {this.views > 0 && <span class="story-stat-separator">&middot;</span>}
                                <span class="story-stat">
                                    <span class="story-stat-value">{this.readingDuration === '-1' ? 'N/A' : this.readingDuration}</span>
                                    <span class="story-stat-label">{this.readingDurationText}</span>
                                </span>
                            </span>

                            <div class="novl-details">
                                {this.languages.split(',').map(language => (
                                    <ur-chip
                                        fontColor="rgb(var(--ur-color-on-surface-lite))"
                                        backColor="rgb(var(--ur-color-surface-container-high))"
                                        size="28px"
                                        class="info-chip"
                                        clickable={false}
                                        label={language}
                                    ></ur-chip>
                                ))}
                                {this.literatureTypes.split(',').map(litType => (
                                    <ur-chip
                                        fontColor="rgb(var(--ur-color-on-surface-lite))"
                                        backColor="rgb(var(--ur-color-surface-container-high))"
                                        size="28px"
                                        class="info-chip"
                                        clickable={false}
                                        label={litType}
                                    ></ur-chip>
                                ))}
                                {this.genres.split(',').map(genre => (
                                    <ur-chip
                                        fontColor="rgb(var(--ur-color-on-surface-lite))"
                                        backColor="rgb(var(--ur-color-surface-container-high))"
                                        size="28px"
                                        class="info-chip"
                                        clickable={false}
                                        label={genre}
                                    ></ur-chip>
                                ))}
                            </div>

                            <div class="actions-holder">
                                {this.hasBranches && (
                                    <ur-button class="summary-action" variant="filled" full-width={this.deviceSize === 'large' ? false : true} onClick={() => this.onReadStory()}>
                                        {this.readStoryText}
                                    </ur-button>
                                )}
                                {this.writeEnabled && !this.hasBranches && (
                                    <ur-button class="summary-action" variant="filled" full-width={this.deviceSize === 'large' ? false : true} onClick={() => this.onWriteStory()}>
                                        {this.writeStoryText}
                                    </ur-button>
                                )}
                                {this.novlPaid &&
                                    (this.novlPurchasedAt ? (
                                        <ur-button class="summary-action" variant="filled" fullWidth={true} onClick={() => this.onReadStory()}>
                                            {this.readStoryText}
                                        </ur-button>
                                    ) : (
                                        <ur-button class="summary-action" variant="filled" fullWidth={true} onClick={() => this.onBuyStory()}>
                                            {this.buyStoryText}&nbsp;
                                            <span class="buy-price">{this.novlPrice}</span>
                                        </ur-button>
                                    ))}
                            </div>
                        </div>

                        <div class="description">
                            <div class="description-header">
                                <span class="label">{this.descriptionText}</span>
                                {this.isOwner && (
                                    <ur-tooltip colorScheme="dark" placement="left" content="Edit description">
                                        <ur-button-icon
                                            buttonHeight="30px"
                                            buttonWidth="30px"
                                            class="edit-button"
                                            icon="edit"
                                            onClick={() => this.onEditDescription()}
                                        ></ur-button-icon>
                                    </ur-tooltip>
                                )}
                            </div>
                            <slot name="description"></slot>
                        </div>

                        <div class="owner-holder">
                            <slot name="owner"></slot>
                            <slot name="owner-page"></slot>
                        </div>

                        {!this.novlPaid && this.isOwner && this.renderCompleteActions()}
                    </div>
                    <div class="ad-space">&nbsp;</div>
                </div>
            </Host>
        );
    }

    renderStatusChips() {
        return (
            <div class={`status ${this.deviceSize === 'small' ? 'small-device' : 'large-device'}`}>
                {this.storyCompleteStatus ? (
                    <ur-chip
                        fontColor="#1A5100"
                        backColor="#C6F4D0"
                        radius="50px"
                        border="2px"
                        size="32px"
                        class="status-chip"
                        clickable={false}
                        label={this.completeText}
                    ></ur-chip>
                ) : (
                    <ur-chip
                        fontColor="rgb(var(--ur-color-primary))"
                        backColor="rgb(var(--ur-color-primary-container))"
                        size="32px"
                        class="status-chip"
                        border="2px"
                        radius="50px"
                        clickable={false}
                        label={this.ongoingText}
                    ></ur-chip>
                )}
            </div>
        );
    }

    renderVisibilitySwitch() {
        return (
            <div class="visibility-toggle">
                <ur-switch checked={this.visibility === 'public'} checkedIcon="public" uncheckedIcon="lock" onSwitchChange={() => this.onChangeVisibility()}></ur-switch>
                <span class="visibility-label">{this.visibility === 'public' ? this.visibilityPublicText : this.visibilityPrivateText}</span>
            </div>
        );
    }

    renderCompleteActions() {
        return (
            <div class="complete-actions">
                {!this.storyCompleteStatus ? (
                    <ur-button
                        class="overview-action"
                        variant="filled"
                        onClick={() => this.onCompleteStory()}
                        disabled={!this.showPublishedButton}
                        backgroundColor={this.showPublishedButton ? 'rgb(var(--ur-color-tertiary))' : ''}
                        buttonHeight="40px"
                    >
                        {this.completeStoryText}
                    </ur-button>
                ) : (
                    <ur-button class="overview-action" variant="text" onClick={() => this.onRevertStory()} buttonHeight="40px">
                        {this.revertStoryText}
                    </ur-button>
                )}
            </div>
        );
    }
}
