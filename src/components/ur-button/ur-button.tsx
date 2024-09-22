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

    render() {
        return (
            <Host>
                <mdui-button
                    icon={!!this.icon ? this.icon : false}
                    end-icon={!!this.endIcon ? this.endIcon : false}
                    variant={this.variant}
                    disabled={this.disabled}><slot></slot></mdui-button>
            </Host>
        );
    }
}
