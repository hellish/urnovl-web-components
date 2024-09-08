import { Component, Host, h } from '@stencil/core';

import 'mdui/components/checkbox';

@Component({
    tag: 'ur-locale-filter-panel',
    styleUrl: 'ur-locale-filter-panel.css',
    shadow: true,
})
export class UrLocaleFilterPanel {
    render() {
        return (
            <Host>
                <mdui-checkbox checked>Checkbox</mdui-checkbox>
            </Host>
        );
    }
}
