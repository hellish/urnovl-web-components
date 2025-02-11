import { Component, Prop, Host, h, State, Element } from '@stencil/core';

@Component({
    tag: 'ur-long-description',
    styleUrl: 'ur-long-description.css',
    shadow: true,
})
export class UrLongDescription {
    @Element()
    el: HTMLElement;

    @Prop()
    description: string; // The description text to display

    @State()
    isExpanded: boolean = false; // State to manage expand/collapse

    @Prop()
    showLessText: string = 'Show less';

    @Prop()
    showMoreText: string = 'Show more...';

    /** Toggles the expanded state */
    private toggleDescription = () => {
        this.isExpanded = !this.isExpanded;
    };

    render() {
        return (
            <Host onClick={this.toggleDescription}>
                <div
                    class={{
                        'description-container': true,
                        'expanded': this.isExpanded,
                        'collapsed': !this.isExpanded,
                    }}
                >
                    <p class="description-text">{this.description}</p>
                </div>
                <span class="toggle-label">{this.isExpanded ? this.showLessText : this.showMoreText}</span>
            </Host>
        );
    }
}
