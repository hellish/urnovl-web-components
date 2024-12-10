import { Component, Prop, State, Watch, Host, h, Element } from '@stencil/core';

@Component({
    tag: 'ur-reader',
    styleUrl: 'ur-reader.css',
    shadow: true,
})
export class UrReader {
    @Prop()
    loading = false; // Prop to indicate loading state

    @Prop()
    storyTitle: string = 'Default Story Title';

    @Prop()
    chapterTitle: string = 'Default Chapter Title';

    @Prop()
    chapterContent: string = '<p>Default chapter content.</p>'; // Accept HTML

    @Prop()
    fontSize: 'small' | 'medium' | 'large' = 'medium';

    @Prop()
    fontType: 'serif' | 'sans-serif' | 'monospace' | 'system' = 'sans-serif';

    @Prop()
    readingTimePerWord: number = 0.3; // Average time (seconds) per word

    @State()
    isSmallContainer: boolean = false;

    @State()
    baseFontSize: number = 18; // Default for desktop

    @State()
    fontStyles: { fontFamily: string; fontSize: string } = { fontFamily: '', fontSize: '' };

    @Element() el: HTMLElement;

    private resizeObserver: ResizeObserver;

    componentWillLoad() {
        this.setBaseFontSize(); // Initialize base font size
        this.updateFontStyles(); // Initialize styles
    }

    componentDidLoad() {
        const container = this.el.shadowRoot.querySelector('.reader-container');
        if (container) {
            let resizeTimeout: NodeJS.Timeout; // Timeout for throttling

            this.resizeObserver = new ResizeObserver(entries => {
                for (const entry of entries) {
                    clearTimeout(resizeTimeout); // Clear any previously scheduled update
                    resizeTimeout = setTimeout(() => {
                        // Schedule a new update
                        const width = entry.contentRect.width;

                        if (width <= 480) {
                            this.isSmallContainer = true;
                            this.baseFontSize = 14; // Smaller base font size for smaller containers
                        } else {
                            this.isSmallContainer = false;
                            this.baseFontSize = 18; // Default base font size for larger containers
                        }
                        this.updateFontStyles(); // Update styles dynamically based on size
                    }, 100); // Throttle to update every 100ms
                }
            });

            this.resizeObserver.observe(container);
        }
    }

    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    @Watch('fontSize')
    @Watch('fontType')
    updateFontStyles() {
        const fontSizeMultiplier = this.getFontSizeMultiplier(this.fontSize);
        const calculatedFontSize = this.baseFontSize * fontSizeMultiplier;

        this.fontStyles = {
            fontFamily: this.getFontFamily(this.fontType),
            fontSize: `${calculatedFontSize}px`,
        };
    }

    private setBaseFontSize() {
        // Detect screen size and set base font size
        this.baseFontSize = window.innerWidth <= 768 ? 16 : 18; // 16px for mobile, 18px for desktop
        window.addEventListener('resize', () => {
            this.baseFontSize = window.innerWidth <= 768 ? 16 : 18;
            this.updateFontStyles(); // Recalculate styles on resize
        });
    }

    private calculateReadingTime(): string {
        const textContent = this.extractText(this.chapterContent);
        const wordCount = textContent.split(/\s+/).length; // Count words
        const readingTimeInMinutes = Math.ceil((wordCount * this.readingTimePerWord) / 60); // Convert to minutes
        return `Reading duration ${readingTimeInMinutes} min`;
    }

    private extractText(html: string): string {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
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
            <Host>
                <section
                    class={{
                        'reader-container': true,
                        'small-container': this.isSmallContainer, // Match the small-container class logic
                    }}
                >
                    <h2 class="novl-title loading">&nbsp;</h2>
                    <h3 class="chapter-title loading">&nbsp;</h3>
                    <div class="chapter-info">Reading Duration</div>
                    <div class="chapter-content loading">&nbsp;</div>
                </section>
            </Host>
        );
    }

    render() {
        if (this.loading) {
            return this.renderLoading();
        }

        return (
            <Host>
                <section
                    class={{
                        'reader-container': true,
                        'small-container': this.isSmallContainer, // Apply small-container class if width <= 480px
                    }}
                >
                    <h2
                        class="novl-title"
                        style={{
                            fontFamily: this.fontStyles.fontFamily,
                        }}
                    >
                        {this.storyTitle}
                    </h2>
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
                        innerHTML={this.chapterContent} // Safely render the HTML content
                    ></div>
                </section>
            </Host>
        );
    }
}
