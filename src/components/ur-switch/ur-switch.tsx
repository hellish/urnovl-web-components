import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/switch';

@Component({
    tag: 'ur-switch',
    styleUrl: 'ur-switch.css',
    shadow: true,
})
export class UrSwitch {

    @Prop()
    disabled = false;

    @Prop()
    checked = false;

    render() {
        return (
            <Host>
                <mdui-switch checked={this.checked} disabled={this.disabled}></mdui-switch>
            </Host>
        );
    }
}
