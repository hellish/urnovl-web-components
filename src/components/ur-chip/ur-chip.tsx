import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/chip.js';

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
    radius = '8px';

    @Prop()
    size = '32px'

    @Prop()
    backColor = 'rgb(var(--mdui-color-secondary-container))';

    @Prop()
    fontColor = 'rgb(var(--mdui-color-on-secondary-container))';

    @Prop()
    loading = false;

    @Prop()
    disabled = false;

    render() {
        return (
            <Host>
                <mdui-chip disabled={this.disabled} loading={this.loading} style={{ color: this.fontColor , background: this.backColor, borderRadius: this.radius, height: this.size, borderWidth: this.border }}>{this.label}</mdui-chip>
            </Host>
        );
    }
}
