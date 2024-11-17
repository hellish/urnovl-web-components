import { Component, Host, Prop, h } from '@stencil/core';

@Component({
    tag: 'ur-list-subheader',
    styleUrl: 'ur-list-subheader.css',
    shadow: true,
})
export class UrListSubheader {
    @Prop() text: string = ''; // The text for the subheader

    render() {
        return (
            <Host>
                <mdui-list-subheader>{this.text || <slot></slot>}</mdui-list-subheader>
            </Host>
        );
    }
}
