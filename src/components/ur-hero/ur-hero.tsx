import { Component, Prop, Host, h } from '@stencil/core';

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

  /** Background justification variant: top, center, or bottom */
  @Prop() backgroundJustification: 'top' | 'center' | 'bottom' = 'center';

  render() {
    return (
      <Host>
        <div
          class={{
            'hero-container': true,
            [`layout-${this.layout}`]: true,
            [`background-${this.backgroundJustification}`]: true,
          }}
          style={{
            backgroundImage: `url(${this.backgroundImage})`,
            backgroundColor: this.backgroundColor,
          }}
        >
          <div class="overlay">
            <h2 class="hero-title">{this.heroTitle}</h2>
            <p class="hero-subtitle">{this.heroSubtitle}</p>
            <ur-button
              variant="filled"
              full-width={false}
              disabled={false}
            >
              {this.ctaText}
            </ur-button>
          </div>
        </div>
      </Host>
    );
  }
}
