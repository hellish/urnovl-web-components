import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/chip';

@Component({
    tag: 'ur-chip',
    styleUrl: 'ur-chip.css',
    shadow: true,
})
export class UrChip {
    @Prop()
    label: string = 'Chip';

    @Prop()
    border = '0';

    @Prop()
    borderColor = 'rgb(var(--ur-color-background))';

    @Prop()
    radius = '8px';

    @Prop()
    size = '32px'

    @Prop()
    backColor = 'rgb(var(--mdui-color-primary-container-light))';

    @Prop()
    fontColor = 'rgb(var(--mdui-color-on-primary-container-light))';

    @Prop()
    loading = false;

    @Prop()
    disabled = false;

    @Prop()
    clickable = true;

    render() {
        return (
            <Host>
                <mdui-chip 
                    class={!this.clickable ? 'non-clickable' : ''}
                    disabled={this.disabled}
                    loading={this.loading}
                    style={{
                        color: this.fontColor,
                        background: this.backColor,
                        borderRadius: this.radius,
                        height: this.size,
                        borderWidth: this.border,
                        borderColor: this.borderColor
                    }}
                >
                    {this.label}
                </mdui-chip>
            </Host>
        );
    }
}