import { Component, Prop, State, Watch, Host, h, Element, Event, EventEmitter } from '@stencil/core';
import DOMPurify from 'dompurify';

@Component({
    tag: 'ur-reader',
    styleUrl: 'ur-reader.css',
    shadow: true,
})
export class UrReader {
    @Prop()
    avatarSrc: string = 'https://i.pravatar.cc/150?img=3'; // Default avatar image

    @Prop()
    avatarName: string = 'Jane Doe'; // Default avatar name

    @Prop()
    loading = false; // Prop to indicate loading state

    @Prop()
    chapterLocked = false; // Prop to indicate loading state

    @Prop()
    storyTitle: string = 'Default Story Title';

    @Prop()
    chapterTitle: string = 'Default Chapter Title';

    @Prop()
    chapterContent: string = '<p>Default chapter content.</p>'; // Accept HTML

    @Prop()
    fontSize: 'small' | 'medium' | 'large' = 'medium';

    @Prop()
    chapterSequence: number = 1; // Default sequence is 1 (first chapter)

    @Prop()
    fontType: 'serif' | 'sans-serif' | 'monospace' | 'system' = 'sans-serif';

    @Prop()
    readingDurationText: string = 'Reading Duration'; // Default text for reading duration

    @Prop()
    minutesText: string = 'Minutes'; // Default text for reading duration

    @Prop()
    likes: string = '1.5k'; // Default text for reading duration

    @Prop()
    comments: number = 15; // Default number of comments

    @Prop()
    dislike: string = 'Dislike'; // Default text for reading duration

    @Prop()
    donate: string = 'Donate'; // Default text for reading duration

    @Prop()
    share: string = 'Share'; // Default text for reading duration

    @Prop()
    isVisible: boolean = true; // Default visibility state

    @Prop()
    readingTimePerWord: number = 0.3; // Average time (seconds) per word

    @State()
    isSmallContainer: boolean = false;

    @Prop()
    hasPreviousChapter: boolean = true;

    @Prop()
    hasNextChapter: boolean = true;

    @State()
    baseFontSize: number = 18; // Default for desktop

    @Prop()
    lockedMessage: string = 'This chapter is locked. Buy story to read chapter.';

    @Prop()
    nextChapterText: string = 'Next Chapter';

    @Prop()
    previousChapterText: string = 'Previous Chapter';

    @Prop()
    unlockButtonLabel: string = 'Buy and Unlock';

    @State()
    fontStyles: { fontFamily: string; fontSize: string } = { fontFamily: '', fontSize: '' };

    @Event()
    chapterUnlocked: EventEmitter<void>; // Define the custom event

    @Event()
    likeClicked: EventEmitter<void>;

    @Event()
    dislikeClicked: EventEmitter<void>;

    @Event()
    commentClicked: EventEmitter<void>;

    @Event()
    donateClicked: EventEmitter<void>;

    @Event()
    shareClicked: EventEmitter<void>;

    @Event()
    nextChapterClicked: EventEmitter<void>;

    @Event()
    previousChapterClicked: EventEmitter<void>;

    @Event()
    followAuthorClicked: EventEmitter<void>;

    @Event()
    viewAuthorProfileClicked: EventEmitter<void>;

    @State()
    isHostSmall: boolean = false; // Flag to track if the host width is <= 930px

    private sanitizeContent(content: string): string {
        return DOMPurify.sanitize(content, {
            ALLOWED_TAGS: [
                // Text structure
                'p', 'div', 'span', 
                // Text styling
                'b', 'i', 'em', 'strong', 'u',
                // Headers
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                // Lists
                'ul', 'ol', 'li', 
                // Other elements
                'a', 'br', 'blockquote', 'img', 'hr'
            ],
            ALLOWED_ATTR: [
                // Link attributes
                'href', 'target', 'rel',
                // Image attributes
                'src', 'alt',
                // Styling attributes
                'style', 'class', 'id',
                // Allow specific style properties
                'data-text-align'  // We'll use a data attribute approach
            ],
            ADD_ATTR: ['style']  // Explicitly add style attribute
        });
    }

    private handleNextChapter() {
        console.log('Next Chapter button clicked');
        this.nextChapterClicked.emit(); // Emit the updated event
    }

    private handlePreviousChapter() {
        console.log('Previous Chapter button clicked');
        this.previousChapterClicked.emit(); // Emit the updated event
    }

    @Element()
    el: HTMLElement;

    private resizeObserver: ResizeObserver;

    componentWillLoad() {
        this.setBaseFontSize(); // Initialize base font size
        this.updateFontStyles(); // Initialize styles
    }

    componentDidLoad() {
        const hostElement = this.el; // Host element (ur-reader)
        const container = this.el.shadowRoot.querySelector('.reader-container');

        if (hostElement && container) {
            let resizeTimeout: NodeJS.Timeout; // Throttling timeout

            this.resizeObserver = new ResizeObserver(entries => {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(() => {
                    entries.forEach(entry => {
                        const width = entry.target.getBoundingClientRect().width;

                        // Update base font size for child container
                        if (entry.target === container) {
                            if (width <= 480) {
                                this.isSmallContainer = true;
                                this.baseFontSize = 14;
                            } else {
                                this.isSmallContainer = false;
                                this.baseFontSize = 18;
                            }
                            this.updateFontStyles();
                        }

                        // Add or remove class for host width <= 900px
                        if (entry.target === hostElement) {
                            if (width <= 930) {
                                this.el.classList.add('host-small');
                                this.isHostSmall = true; // Update the flag
                            } else {
                                this.el.classList.remove('host-small');
                                this.isHostSmall = false; // Update the flag
                            }
                        }
                    });
                }, 100);
            });

            // Observe both host element and container
            this.resizeObserver.observe(hostElement);
            this.resizeObserver.observe(container);
        }
    }

    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    @Watch('storyTitle')
    @Watch('chapterTitle')
    @Watch('chapterContent')
    @Watch('fontSize')
    @Watch('fontType')
    @Watch('loading')
    @Watch('chapterLocked')
    @Watch('chapterSequence')
    @Watch('hasPreviousChapter')
    @Watch('hasNextChapter')
    @Watch('isVisible')
    handlePropChange() {
        console.log('Properties changed, re-rendering...');
        this.updateFontStyles();
        this.render(); // Trigger re-render when observed properties change
    }

    private setBaseFontSize() {
        // Detect screen size and set base font size
        this.baseFontSize = window.innerWidth <= 768 ? 16 : 18; // 16px for mobile, 18px for desktop
        window.addEventListener('resize', () => {
            this.baseFontSize = window.innerWidth <= 768 ? 16 : 18;
            this.updateFontStyles(); // Recalculate styles on resize
        });
    }

    private updateFontStyles() {
        const fontSizeMultiplier = this.getFontSizeMultiplier(this.fontSize);
        const calculatedFontSize = this.baseFontSize * fontSizeMultiplier;

        this.fontStyles = {
            fontFamily: this.getFontFamily(this.fontType),
            fontSize: `${calculatedFontSize}px`,
        };
    }

    private calculateReadingTime(): string {
        const textContent = this.extractText(this.chapterContent);
        const wordCount = textContent.split(/\s+/).length; // Count words
        const readingTimeInMinutes = Math.ceil((wordCount * this.readingTimePerWord) / 60); // Convert to minutes
        return `${this.readingDurationText} ${readingTimeInMinutes} ${this.minutesText}`;
    }

    // And update your extractText method:
    private extractText(html: string): string {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = this.sanitizeContent(html);
        return tempDiv.textContent || tempDiv.innerText || '';
    }

    private getFontFamily(fontType: string): string {
        switch (fontType) {
            case 'serif':
                return 'Georgia, Times New Roman, Times, serif';
            case 'sans-serif':
                return 'Open Sans, Arial, Helvetica, sans-serif'; // Open Sans prioritized
            case 'monospace':
                return 'Courier New, monospace';
            case 'system':
                return 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif';
            default:
                return 'Arial, sans-serif';
        }
    }

    private getFontSizeMultiplier(fontSize: string): number {
        switch (fontSize) {
            case 'small':
                return 0.9; // Reduce by 10%
            case 'large':
                return 1.2; // Increase by 20%
            default:
                return 1; // Default (100%)
        }
    }

    private renderLoading() {
        return (
            <Host class="reader-holder">
                <section
                    class={{
                        'reader-container': true,
                        'small-container': this.isSmallContainer, // Match the small-container class logic
                    }}
                >
                    {this.chapterSequence === 1 && (
                        <h2
                            class="novl-title loading"
                            style={{
                                fontFamily: this.fontStyles.fontFamily,
                            }}
                        >
                            {this.storyTitle}
                        </h2>
                    )}
                    <h3 class="chapter-title loading">&nbsp;</h3>
                    <div class="chapter-info">{this.readingDurationText}</div>
                    <div class="chapter-content loading">&nbsp;</div>
                </section>
            </Host>
        );
    }

    private handleUnlockChapter() {
        // Logic to handle unlocking the chapter
        console.log('Chapter unlock button clicked');
        this.chapterUnlocked.emit(); // Emit the custom event
    }

    private renderLocked() {
        return (
            <Host>
                <section
                    class={{
                        'reader-container': true,
                        'small-container': this.isSmallContainer, // Match the small-container class logic
                    }}
                >
                    {this.chapterSequence === 1 && (
                        <h2
                            class="novl-title"
                            style={{
                                fontFamily: this.fontStyles.fontFamily,
                            }}
                        >
                            {this.storyTitle}
                        </h2>
                    )}
                    <h3
                        class="chapter-title"
                        style={{
                            fontFamily: this.fontStyles.fontFamily,
                        }}
                    >
                        {this.chapterTitle}
                    </h3>
                    <div class="chapter-info">{this.readingDurationText}</div>
                    <div class="chapter-content locked-content">
                        <p
                            class="locked-message"
                            style={{
                                fontFamily: this.fontStyles.fontFamily,
                                fontSize: this.fontStyles.fontSize,
                            }}
                        >
                            {this.lockedMessage}
                        </p>
                        <ur-button variant="filled" fullWidth={true} onClick={() => this.handleUnlockChapter()}>
                            {this.unlockButtonLabel}
                        </ur-button>
                    </div>
                </section>
            </Host>
        );
    }

    render() {
        if (this.loading) {
            return this.renderLoading();
        }

        if (this.chapterLocked) {
            return this.renderLocked();
        }

        return (
            <Host>
                <div class="ur-read-rail-holder">
                    <slot name="ur-read-rail-slot"></slot>
                </div>
                <section
                    class={{
                        'reader-container': true,
                        'small-container': this.isSmallContainer, // Apply small-container class if width <= 480px
                    }}
                >
                    {this.chapterSequence === 1 && (
                        <h2
                            class="novl-title"
                            style={{
                                fontFamily: this.fontStyles.fontFamily,
                            }}
                        >
                            {this.storyTitle}
                        </h2>
                    )}
                    <h3
                        class="chapter-title"
                        style={{
                            fontFamily: this.fontStyles.fontFamily,
                        }}
                    >
                        {this.chapterTitle}
                    </h3>
                    <div class="chapter-info">
                        <span class="reading-time">{this.calculateReadingTime()}</span>
                    </div>
                    <div
                        class="chapter-content"
                        style={{
                            fontFamily: this.fontStyles.fontFamily,
                            fontSize: this.fontStyles.fontSize,
                        }}
                        innerHTML={this.sanitizeContent(this.chapterContent)} // Change this line
                    ></div>
                    <div
                        class={{
                            'navigation-buttons': true,
                            'hidden': !this.isVisible,
                        }}
                    >
                        {this.isHostSmall && this.hasPreviousChapter && this.chapterSequence !== 1 && (
                            <ur-button variant="text" class="nav-button" fullWidth icon="arrow_back" disabled={false} onClick={() => this.handlePreviousChapter()}>
                                {this.previousChapterText}
                            </ur-button>
                        )}
                        {!this.isHostSmall && this.hasPreviousChapter && this.chapterSequence !== 1 && (
                            <ur-tooltip
                                content={this.previousChapterText} // Tooltip text from prop
                                placement="right"
                                trigger="hover"
                                colorScheme="dark"
                            >
                                <ur-button-icon class="arrow-button" icon="arrow_back" disabled={false} onClick={() => this.handlePreviousChapter()}></ur-button-icon>
                            </ur-tooltip>
                        )}
                        <span class="mid-flex"></span>
                        {!this.isHostSmall && this.hasNextChapter && (
                            <ur-tooltip
                                content={this.nextChapterText} // Tooltip text from prop
                                placement="left"
                                trigger="hover"
                                colorScheme="dark"
                            >
                                <ur-button-icon class="arrow-button" icon="arrow_forward" disabled={false} onClick={() => this.handleNextChapter()}></ur-button-icon>
                            </ur-tooltip>
                        )}
                        {this.isHostSmall && this.hasNextChapter && (
                            <ur-button variant="text" class="nav-button" fullWidth end-icon="arrow_forward" disabled={false} onClick={() => this.handleNextChapter()}>
                                {this.nextChapterText}
                            </ur-button>
                        )}
                    </div>
                </section>
            </Host>
        );
    }
}
