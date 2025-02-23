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
    icon: string = 'favorite_border';

    @Prop()
    selectedIcon?: string;

    @Prop()
    selected = false;

    @Prop()
    active = false;

    @Prop()
    borderRadius: string = '8px';

    @Prop()
    buttonWidth: string = '40px';

    @Prop()
    buttonHeight: string = '40px';

    @Prop()
    fontColor: string;

    @Prop()
    backgroundColor: string;

    private renderIcon() {
        // If there's content in the slot, it will override this
        if (this.icon.includes('<svg')) {
            // If icon contains SVG markup
            return <span innerHTML={this.icon}></span>;
        } else {
            // Default MDUI icon behavior
            return <mdui-icon name={this.selected && this.selectedIcon ? this.selectedIcon : this.icon} />;
        }
    }

    render() {
        const classes = {
            'ur-button-icon': true,
            'ur-button-icon--active': this.active
        };
        return (
            <Host style={{ borderRadius: this.borderRadius, color: this.fontColor, width: this.buttonWidth, height: this.buttonHeight, backgroundColor: this.backgroundColor }}>
                <mdui-button-icon
                    style={{ borderRadius: this.borderRadius, color: this.fontColor, width: this.buttonWidth, height: this.buttonHeight, backgroundColor: this.backgroundColor }}
                    class={classes}
                    variant={this.variant}
                    loading={this.loading}
                    disabled={this.disabled}
                    selected={this.selected}
                >
                    <slot>{this.renderIcon()}</slot>
                </mdui-button-icon>
            </Host>
        );
    }
}
