import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/checkbox';

@Component({
    tag: 'ur-checkbox',
    styleUrl: 'ur-checkbox.css',
    shadow: true,
})
export class UrCheckbox {

    @Prop()
    disabled = false;

    @Prop()
    checked = false;

    render() {
        return (
            <Host>
                <mdui-checkbox part="check" checked={this.checked} disabled={this.disabled}><slot></slot></mdui-checkbox>
            </Host>
        );
    }
}
