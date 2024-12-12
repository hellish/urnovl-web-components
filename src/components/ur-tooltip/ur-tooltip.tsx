import { Component, Prop, State, h, Host, Element } from '@stencil/core';

@Component({
    tag: 'ur-tooltip',
    styleUrl: 'ur-tooltip.css',
    shadow: true,
})
export class UrTooltip {
    @Prop()
    content: string = 'Tooltip text'; // Tooltip content

    @Prop()
    variant: 'plain' | 'rich' = 'plain'; // Tooltip type

    @Prop() placement:
        | 'auto'
        | 'top-left'
        | 'top-start'
        | 'top'
        | 'top-end'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-start'
        | 'bottom'
        | 'bottom-end'
        | 'bottom-right'
        | 'left-start'
        | 'left'
        | 'left-end'
        | 'right-start'
        | 'right'
        | 'right-end' = 'top'; // Tooltip position

    @Prop()
    openDelay: number = 0; // Open delay in ms

    @Prop()
    closeDelay: number = 150; // Close delay in ms

    @Prop()
    trigger: 'hover' | 'click' | 'focus' = 'hover'; // Trigger method

    @Prop()
    disabled: boolean = false; // Disabled state

    @State()
    isVisible: boolean = false; // Tooltip visibility state

    @Element()
    hostElement!: HTMLElement; // Reference to the host element

    private timeoutId: number | null = null; // Timeout ID for delays

    connectedCallback() {
        document.addEventListener('keydown', this.handleKeyDown); // Listen for Escape key globally
    }

    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown); // Clean up keydown listener
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.isVisible) {
            this.isVisible = false; // Hide tooltip when Escape is pressed
        }
    };

    private handleFocus = () => {
        if (this.disabled || this.trigger !== 'focus') return;
        clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => {
            this.isVisible = true; // Show tooltip on focus
        }, this.openDelay);
    };

    private handleBlur = () => {
        if (this.disabled || this.trigger !== 'focus') return;
        clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => {
            this.isVisible = false; // Hide tooltip on blur
        }, this.closeDelay);
    };

    private handleMouseEnter = (event: MouseEvent) => {
        if (this.disabled || !this.isChildElement(event.target)) return;
        clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => {
            this.isVisible = true;
        }, this.openDelay);
    };

    private handleMouseLeave = (event: MouseEvent) => {
        if (this.disabled) return;
        const relatedTarget = event.relatedTarget as HTMLElement;
        if (this.hostElement.contains(relatedTarget) || (this.hostElement.shadowRoot && this.hostElement.shadowRoot.contains(relatedTarget))) {
            clearTimeout(this.timeoutId);
            return;
        }
        clearTimeout(this.timeoutId);
        this.timeoutId = window.setTimeout(() => {
            this.isVisible = false;
        }, this.closeDelay);
    };

    private handleTooltipMouseEnter = () => {
        clearTimeout(this.timeoutId);
    };

    private handleTooltipMouseLeave = () => {
        this.timeoutId = window.setTimeout(() => {
            this.isVisible = false;
        }, this.closeDelay);
    };

    private handleClick = (event: MouseEvent) => {
        if (this.disabled || !this.isChildElement(event.target)) return;
        this.isVisible = !this.isVisible;
    };

    private isChildElement(target: EventTarget | null): boolean {
        const slot = this.hostElement.shadowRoot?.querySelector('slot');
        const assignedNodes = slot ? (slot as HTMLSlotElement).assignedElements() : [];
        const slotContainsTarget = assignedNodes.some(node => node.contains(target as Node));
        const hostContainsTarget = this.hostElement.contains(target as Node);
        return slotContainsTarget || hostContainsTarget;
    }

    renderTooltipContent() {
        return (
            <div class="tooltip-content" onMouseEnter={this.handleTooltipMouseEnter} onMouseLeave={this.handleTooltipMouseLeave}>
                {this.variant === 'plain' && this.content}
                {this.variant === 'rich' && <slot name="rich-content"></slot>}
            </div>
        );
    }

    render() {
        const tooltipStyles = {
            visibility: this.isVisible ? 'visible' : 'hidden',
            opacity: this.isVisible ? '1' : '0',
            transition: 'opacity 0.2s, visibility 0.2s',
        };

        const tooltipContainerClass = `tooltip-container tooltip-${this.placement}`;

        return (
            <Host
                onMouseEnter={this.trigger === 'hover' ? this.handleMouseEnter : undefined}
                onMouseLeave={this.trigger === 'hover' ? this.handleMouseLeave : undefined}
                onClick={this.trigger === 'click' ? this.handleClick : undefined}
                onFocus={this.trigger === 'focus' ? this.handleFocus : undefined}
                onBlur={this.trigger === 'focus' ? this.handleBlur : undefined}
            >
                <div class="tooltip-wrapper">
                    <slot></slot>
                    <div class={tooltipContainerClass} style={tooltipStyles}>
                        {this.renderTooltipContent()}
                    </div>
                </div>
            </Host>
        );
    }
}
