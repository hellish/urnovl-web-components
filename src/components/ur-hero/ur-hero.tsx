import { Component, Prop, Host, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
    tag: 'ur-hero',
    styleUrl: 'ur-hero.css',
    shadow: true,
})
export class UrHero {
    /** Hero title */
    @Prop() heroTitle: string;

    /** Hero subtitle */
    @Prop() heroSubtitle: string;

    /** Call to action button text */
    @Prop() ctaText: string;

    /** Background image URL */
    @Prop() backgroundImage: string;

    /** Background color overlay */
    @Prop() backgroundColor: string = 'rgba(0, 0, 0, 0.5)';

    /** Layout variant: left, right, or center */
    @Prop() layout: 'left' | 'right' | 'center' = 'center';

    /** Background vertical justification: top, center, or bottom */
    @Prop() backgroundJustification: 'top' | 'center' | 'bottom' = 'center';

    /** Background horizontal alignment: left, center, or right */
    @Prop() backgroundAlignment: 'left' | 'center' | 'right' = 'center';

    /** Hero title color */
    @Prop() heroTitleColor: string = '#ffffff'; // Default to white

    /** Hero subtitle color */
    @Prop() heroSubtitleColor: string = '#cccccc'; // Default to light gray

    /** Event emitted when CTA button is clicked */
    @Event() ctaClicked: EventEmitter<void>;

    /** State to store width-based class */
    @State() widthClass: string = 'large-hero';

    private containerElement!: HTMLElement;

    private updateWidthClass(width: number) {
        if (width <= 480) {
            this.widthClass = 'small-hero';
        } else if (width <= 768) {
            this.widthClass = 'medium-hero';
        } else {
            this.widthClass = 'large-hero';
        }
    }

    private observeResize() {
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const width = entry.contentRect.width;
                this.updateWidthClass(width);
            }
        });
        resizeObserver.observe(this.containerElement);
    }

    /** Handles CTA button click */
    private handleCtaClick = () => {
        this.ctaClicked.emit(); // Emit the event
    };

    componentDidLoad() {
        this.observeResize();
    }

    render() {
        return (
            <Host
                ref={el => (this.containerElement = el)}
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
