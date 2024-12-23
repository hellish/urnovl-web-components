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

    @Prop()
    icon = null;

    @Prop()
    endIcon = null;

    @Prop()
    fullWidth: boolean;

    render() {
        const buttonClass = this.fullWidth ? 'full-width' : '';

        return (
            <Host full-width={this.fullWidth ? 'true' : null}>
                <mdui-button
                    class={buttonClass} // Dynamically assign the class
                    icon={!!this.icon ? this.icon : false}
                    end-icon={!!this.endIcon ? this.endIcon : false}
                    variant={this.variant}
                    full-width={this.fullWidth}
                    disabled={this.disabled}><slot></slot></mdui-button>
            </Host>
        );
    }
}
