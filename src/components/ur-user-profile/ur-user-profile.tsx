import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'ur-user-profile',
    styleUrl: 'ur-user-profile.css',
    shadow: true,
})
export class UrUserProfile {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
