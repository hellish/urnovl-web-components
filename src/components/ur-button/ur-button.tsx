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

    @Prop()
    loading = false;

    @Prop()
    fontColor: string;

    @Prop()
    buttonHeight: string;

    @Prop()
    borderRadius: string = '8px';

    render() {
        const buttonClass = this.fullWidth ? 'full-width' : '';

        return (
            <Host full-width={this.fullWidth ? 'true' : null} style={{ color: this.fontColor, height: this.buttonHeight, borderRadius: this.borderRadius }}>
                <mdui-button
                    style={{ color: this.fontColor, height: this.buttonHeight, borderRadius: this.borderRadius }}
                    class={buttonClass} // Dynamically assign the class
                    icon={!!this.icon ? this.icon : false}
                    end-icon={!!this.endIcon ? this.endIcon : false}
                    variant={this.variant}
                    full-width={this.fullWidth}
                    disabled={this.disabled || this.loading}><slot></slot></mdui-button>
            </Host>
        );
    }
}
