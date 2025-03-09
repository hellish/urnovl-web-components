import { Component, Prop, Host, h, State, Element, Event, EventEmitter } from '@stencil/core';

import '../ur-button/ur-button';
import '../ur-button-icon/ur-button-icon';
import '../ur-time-ago/ur-time-ago';

@Component({
    tag: 'ur-chapter-item',
    styleUrl: 'ur-chapter-item.css',
    shadow: true,
})
export class UrChapterItem {
    @Element()
    el: HTMLElement;

    @Prop()
    chapterId: string; // Chapter ID

    @Prop()
    chapterNumber: number; // Chapter number

    @Prop()
    chapterTitle: string; // Title of the chapter

    @Prop()
    createdAt: string; // Creation date/time

    @Prop()
    isBound: boolean = false; // Whether the chapter is bound

    @Prop()
    isStoryCompleted: boolean = false; // Whether the story is completed

    @Prop()
    likes: number = 0; // Number of likes

    @Prop()
    views: number = 0; // Number of views

    @Prop()
    isOwner: boolean = false; // Whether the chapter is owned by the user

    @Prop()
    readingDuration: number = 0; // Reading duration in minutes

    @Prop()
    readChapterText: string = 'Read'; // Text for read chapter

    @Prop()
    likesText: string = 'Likes'; // Text for likes

    @Prop()
    viewsText: string = 'Views'; // Text for views

    @Prop()
    readingDurationText: string = 'Reading Duration'; // Text for reading duration

    @Prop()
    isLocked: boolean = false; // Whether the chapter is locked

    @State()
    loading: boolean = false; // Loading state

    @Event({ bubbles: true })
    readChapter: EventEmitter<string>;

    @Event({ bubbles: true })
    deleteChapter: EventEmitter<{ chapterId: string; chapterTitle: string }>;

    private onReadChapter = (chapterId: string) => {
        this.readChapter.emit(chapterId);
    };

    private onChapterDelete = (chapterId: string, chapterTitle: string) => {
        this.deleteChapter.emit({ chapterId, chapterTitle });
    };

    render() {
        return (
            <Host>
                <div class="chapter-container">
                    <div class={`chapter ${this.isBound ? 'bound' : ''}`}>
                        <div class="chapter-card">
                            <div class="top-hld">
                                <div class="txt-hld">
                                    <span class="chapter-number">{this.chapterNumber}</span>

                                    <span class="main-holder">
                                        <span class="chapter-title" onClick={() => this.onReadChapter(this.chapterId)}>{this.chapterTitle}</span>

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
                                                <span class="story-stat-value">{this.readingDuration === -1 ? 'N/A' : this.readingDuration}</span>
                                                <span class="story-stat-label">{this.readingDurationText}</span>
                                            </span>
                                        </span>

                                        <ur-time-ago class="when" date={this.createdAt}></ur-time-ago>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="action-buttons">
                            {this.isOwner && (
                                <ur-button class="action-button" disabled={this.loading} variant="text" onClick={() => this.onReadChapter(this.chapterId)}>
                                    {this.readChapterText}
                                </ur-button>
                            )}
                            {!this.isLocked && !this.isOwner && (
                                <ur-button class="action-button" disabled={this.loading} variant="text" onClick={() => this.onReadChapter(this.chapterId)}>
                                    {this.readChapterText}
                                </ur-button>
                            )}
                            {this.isOwner && !this.isStoryCompleted && (
                                <ur-button-icon fontColor="rgb(var(--ur-color-primary))" class="menu-button" icon="delete" onClick={() => this.onChapterDelete(this.chapterId, this.chapterTitle)}>
                                </ur-button-icon>
                            )}
                            {this.isLocked && (
                                <ur-button-icon disabled={true} class="menu-button" icon="lock">
                                </ur-button-icon>
                            )}
                        </div>
                    </div>

                    {/* 
                    {!this.isPublished && !this.isSoloMode && (
                        <ur-button class="write-alternative-button" variant="tonal" fullWidth={true} buttonHeight="36px" onClick={this.onWriteAlternative}>
                            Write an alternative chapter
                        </ur-button>
                    )}
                    */}
                </div>
            </Host>
        );
    }
}
