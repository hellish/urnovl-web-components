import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'ur-locale-filter-panel',
    styleUrl: 'ur-locale-filter-panel.css',
    shadow: true,
})
export class UrLocaleFilterPanel {
    render() {
        return (
            <Host>
                [panel]
            </Host>
        );
    }
}
