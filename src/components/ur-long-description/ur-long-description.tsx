import { Component, Prop, Host, h, State } from '@stencil/core';

@Component({
    tag: 'ur-long-description',
    styleUrl: 'ur-long-description.css',
    shadow: true,
})
export class UrLongDescription {
    @Prop()
    description: string;

    @State()
    isExpanded: boolean = false;

    @Prop()
    showLessText: string = 'Show less';

    @Prop()
    showMoreText: string = 'Show more...';

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
