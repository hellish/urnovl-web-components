import { Component, Host, h } from '@stencil/core';

import 'mdui/components/list';

@Component({
    tag: 'ur-list',
    styleUrl: 'ur-list.css',
    shadow: true,
})
export class UrList {
    render() {
        return (
            <Host>
                <mdui-list class="ur-list">
                    <slot></slot> {/* Allows adding ur-list-item or other child components */}
                </mdui-list>
            </Host>
        );
    }
}
