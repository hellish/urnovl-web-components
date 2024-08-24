import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'ur-generate',
    styleUrl: 'ur-generate.css',
    shadow: true,
})
export class UrGenerate {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
