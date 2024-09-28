import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/button-icon.js';

@Component({
    tag: 'ur-button-icon',
    styleUrl: 'ur-button-icon.css',
    shadow: true,
})
export class UrButtonIcon {

    @Prop()
    disabled = false;

    @Prop()
    loading = false;

    @Prop()
    variant: 'standard' | 'filled' | 'tonal' | 'outlined' = 'standard';

    @Prop()
    icon = 'favorite_border';

    @Prop()
    selectedIcon = 'favorite';

    @Prop()
    selected = false;

    render() {
        return (
            <Host>
                <mdui-button-icon
                    icon={this.icon}
                    variant={this.variant}
                    loading={this.loading}
                    disabled={this.disabled}
                    selected={this.selected}>
                        <mdui-icon slot="selected-icon" name={this.selectedIcon}></mdui-icon>
                </mdui-button-icon>
            </Host>
        )
    }
}