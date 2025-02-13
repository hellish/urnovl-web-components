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
    description: string;

    @State()
    isExpanded: boolean = false;

    @Prop()
    showLessText: string = 'Show less';

    @Prop()
    showMoreText: string = 'Show more...';

    @State()
    isLongDescription: boolean = false;

    private descriptionTextRef: HTMLElement;

    componentDidLoad() {
        // Check if the description is long enough to warrant expansion
        this.checkDescriptionLength();
    }

    componentDidUpdate() {
        this.checkDescriptionLength();
    }

    disconnectedCallback() {
        // Reset the state when component is removed from DOM
        this.isExpanded = false;
    }

    private checkDescriptionLength() {
        if (this.descriptionTextRef) {
            const descriptionHeight = this.descriptionTextRef.scrollHeight;
            const lineHeight = parseFloat(getComputedStyle(this.descriptionTextRef).lineHeight);
            const maxHeight = lineHeight * 3; // Height of 3 lines

            // Only consider it a long description if it exceeds 3 lines
            this.isLongDescription = descriptionHeight > maxHeight;
        }
    }

    private toggleDescription = () => {
        // Only toggle if it's actually a long description
        if (this.isLongDescription) {
            this.isExpanded = !this.isExpanded;
        }
    };

    render() {
        return (
            <Host onClick={this.toggleDescription}>
                <div
                    class={{
                        'description-container': true,
                        'expanded': this.isExpanded,
                        'collapsed': !this.isExpanded && this.isLongDescription,
                    }}
                >
                    <p
                        class="description-text"
                        ref={el => {
                            this.descriptionTextRef = el;
                            // Check length after ref is set
                            if (el) {
                                this.checkDescriptionLength();
                            }
                        }}
                    >
                        {this.description}
                    </p>
                </div>
                {this.isLongDescription && (
                    <span class="toggle-label">
                        {this.isExpanded ? this.showLessText : this.showMoreText}
                    </span>
                )}
            </Host>
        );
    }
}
