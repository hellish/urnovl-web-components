import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/list-subheader';

@Component({
    tag: 'ur-list-subheader',
    styleUrl: 'ur-list-subheader.css',
    shadow: true,
})
export class UrListSubheader {

    @Prop()
    text = '';

    render() {
        return (
            <Host>
                <mdui-list-subheader>{this.text || <slot></slot>}</mdui-list-subheader>
            </Host>
        );
    }
}
