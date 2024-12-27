import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/button-icon';

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
        // Check if the icon is an SVG file (ends with .svg)
        const isSvg = this.icon && this.icon.endsWith('.svg');
    
        return (
            <Host>
                <mdui-button-icon
                    variant={this.variant}
                    loading={this.loading}
                    disabled={this.disabled}
                    selected={this.selected}
                >
                    {/* If it's an SVG path, render it as an image */}
                    {isSvg ? (
                        <img src={this.icon} alt="Custom Icon" class="custom-icon" />
                    ) : (
                        <mdui-icon name={this.icon} />
                    )}
                </mdui-button-icon>
            </Host>
        );
    }
    
}
