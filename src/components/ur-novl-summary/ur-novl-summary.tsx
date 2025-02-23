import { Component, Host, Prop, h, Event, EventEmitter, Method } from '@stencil/core';

import '../ur-time-ago/ur-time-ago';
import '../ur-chip/ur-chip';
import '../ur-long-description/ur-long-description';
import '../ur-profile-card/ur-profile-card';

@Component({
    tag: 'ur-novl-summary',
    styleUrl: 'ur-novl-summary.css',
    shadow: true,
})
export class UrNovlSummary {
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
    learnMoreText: string = 'Learn more';

    @Prop()
    writeStoryText: string = 'Start writing';

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

    @Event()
    readStoryEvent: EventEmitter;

    @Event()
    learnMoreEvent: EventEmitter;

    @Event()
    writeStoryEvent: EventEmitter;

    @Event()
    buyStoryEvent: EventEmitter;

    @Prop()
    ownerAvatar: string;

    @Prop()
    ownerName: string;

    @Prop()
    novlIsOwn: boolean = false;

    @Prop()
    expanded: boolean = false;

    onReadStory() {
        this.readStoryEvent.emit();
    }

    onLearnMore() {
        this.learnMoreEvent.emit();
    }

    onWriteStory() {
        this.writeStoryEvent.emit();
    }

    onBuyStory() {
        this.buyStoryEvent.emit();
    }

    @Method()
    async reset() {
        this.expanded = false;
    }

    render() {
        return (
            <Host>
                <div class="cover">
                    <img class="cover-image" src={this.coverImage} alt="Novl Cover" />
                </div>

                <div class="novl-content">
                    <div class="status">
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

                    <div class="main-content">
                        <h1 class="title-text">{this.novlTitle}</h1>
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
                    </div>

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

                    <div class="description">
                        <slot name="description"></slot>
                    </div>

                    <div class="actions-holder">
                        {this.hasBranches && (
                            <ur-button class="summary-action" variant="filled" full-width={true} onClick={() => this.onReadStory()}>
                                {this.readStoryText}
                            </ur-button>
                        )}
                        {this.writeEnabled && !this.hasBranches && (
                            <ur-button class="summary-action" variant="filled" full-width={true} onClick={() => this.onWriteStory()}>
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

                        {this.novlIsOwn && (
                            <ur-button class="summary-action" variant="outlined" fullWidth={true} onClick={() => this.onLearnMore()}>
                                {this.learnMoreText}
                            </ur-button>
                        )}
                    </div>

                    <div class="owner-holder">
                        <slot name="owner"></slot>
                        <slot name="owner-page"></slot>
                    </div>
                </div>
            </Host>
        );
    }
}
