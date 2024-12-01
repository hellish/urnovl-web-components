import { Component, Prop, Host, h, State, Event, Element, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ur-hero',
    styleUrl: 'ur-hero.css',
    shadow: true,
})
export class UrHero {

    private resizeObserver: ResizeObserver;

    @Element()
    el: HTMLElement;

    @Prop()
    heroTitle: string;

    @Prop()
    heroSubtitle: string;

    @Prop()
    ctaText: string;

    @Prop()
    backgroundImage: string;

    @Prop()
    backgroundColor = 'rgba(0, 0, 0, 0.5)';

    @Prop()
    layout: 'left' | 'right' | 'center' = 'center';

    @Prop()
    backgroundJustification: 'top' | 'center' | 'bottom' = 'center';

    @Prop()
    backgroundAlignment: 'left' | 'center' | 'right' = 'center';

    @Prop()
    heroTitleColor = '#fff'; // Default to white

    @Prop()
    heroSubtitleColor = '#ccc'; // Default to light gray

    @Event()
    ctaClicked: EventEmitter<void>;

    @State()
    widthClass: string = 'large-hero';

    private updateWidthClass(width: number) {
        if (width <= 480) {
            this.widthClass = 'small-hero';
        } else if (width <= 768) {
            this.widthClass = 'medium-hero';
        } else {
            this.widthClass = 'large-hero';
        }
    }

    /** Handles CTA button click */
    private handleCtaClick = () => {
        this.ctaClicked.emit(); // Emit the event
    };

    componentDidLoad() {
        this.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const width = entry.contentRect.width;
                this.updateWidthClass(width);
            }
        });

        this.resizeObserver.observe(this.el);
    }

    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }

    render() {
        return (
            <Host
                class={this.widthClass} // Dynamically apply class to :host
            >
                <div
                    class={{
                        'hero-container': true,
                        [`layout-${this.layout}`]: true,
                        [`background-${this.backgroundJustification}`]: true,
                        [`align-${this.backgroundAlignment}`]: true,
                    }}
                    style={{
                        backgroundImage: `url(${this.backgroundImage})`,
                        backgroundColor: this.backgroundColor,
                    }}
                >
                    <div class="overlay">
                        <h2
                            class="hero-title"
                            style={{
                                color: this.heroTitleColor,
                            }}
                        >
                            {this.heroTitle}
                        </h2>
                        <p
                            class="hero-subtitle"
                            style={{
                                color: this.heroSubtitleColor,
                            }}
                        >
                            {this.heroSubtitle}
                        </p>
                        <ur-button variant="filled" full-width={false} disabled={false} onClick={this.handleCtaClick}>
                            {this.ctaText}
                        </ur-button>
                    </div>
                </div>
            </Host>
        );
    }
}
