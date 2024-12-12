import { Component, Prop, h, Host } from '@stencil/core';

import 'mdui/components/tooltip.js';

@Component({
    tag: 'ur-tooltip',
    styleUrl: 'ur-tooltip.css',
    shadow: true,
})
export class UrTooltip {
    @Prop()
    content: string = 'Tooltip text'; // Tooltip content

    @Prop()
    headline: string = ''; // Headline for rich text tooltip

    @Prop()
    actionText: string = ''; // Action button text for rich tooltip

    @Prop()
    variant: 'plain' | 'rich' = 'plain'; // Tooltip type

    @Prop()
    placement: 
        'auto' | 
        'top-left' | 
        'top-start' | 
        'top' | 
        'top-end' | 
        'top-right' | 
        'bottom-left' | 
        'bottom-start' | 
        'bottom' | 
        'bottom-end' | 
        'bottom-right' | 
        'left-start' | 
        'left' | 
        'left-end' | 
        'right-start' | 
        'right' | 
        'right-end' = 'top'; // Tooltip position

    @Prop()
    openDelay: number = 0; // Open delay in ms

    @Prop()
    closeDelay: number = 150; // Close delay in ms

    @Prop()
    trigger: 'hover' | 'click' | 'focus' = 'hover'; // Trigger method

    @Prop()
    disabled: boolean = false; // Disabled state

    render() {
        return (
            <Host>
                <mdui-tooltip
                    variant={this.variant}
                    placement={this.placement}
                    open-delay={this.openDelay}
                    close-delay={this.closeDelay}
                    trigger={this.trigger}
                    disabled={this.disabled}
                    content={this.variant === 'plain' ? this.content : undefined}
                    class="tooltip-class"
                >
                    <slot></slot>
                    {this.variant === 'rich' && this.headline && <div slot="headline">{this.headline}</div>}
                    {this.variant === 'rich' && this.content && <div slot="content">{this.content}</div>}
                    {this.variant === 'rich' && this.actionText && (
                        <mdui-button slot="action" variant="text">
                            {this.actionText}
                        </mdui-button>
                    )}
                </mdui-tooltip>
            </Host>
        );
    }
}
