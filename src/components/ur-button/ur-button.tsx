import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/button';

@Component({
    tag: 'ur-button',
    styleUrl: 'ur-button.css',
    shadow: true,
})
export class UrButton {

    @Prop()
    disabled = false;

    @Prop()
    variant: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text' = 'filled';

    render() {
        return (
            <Host>
                <mdui-button variant={this.variant} disabled={this.disabled}><slot></slot></mdui-button>
            </Host>
        );
    }
}
