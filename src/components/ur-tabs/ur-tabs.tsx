import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/tabs.js';
import 'mdui/components/tab.js';
import 'mdui/components/tab-panel.js';

@Component({
    tag: 'ur-tabs',
    styleUrl: 'ur-tabs.css',
    shadow: true,
})

export class UrTabs {
    /** The array of tabs, each with a label and value **/
    @Prop() tabs: { label: string, value: string }[] = [
        { label: 'Tab 1', value: 'tab-1' },
        { label: 'Tab 2', value: 'tab-2' },
        { label: 'Tab 3', value: 'tab-3' },
    ];

    /** The array of panels, each with content and value **/
    @Prop() panels: { content: string, slot: string, value: string }[] = [
        { content: 'Panel 1', slot: 'panel-1', value: 'tab-1' },
        { content: 'Panel 2', slot: 'panel-2', value: 'tab-2' },
        { content: 'Panel 3', slot: 'panel-3', value: 'tab-3' },
    ];

    render() {
        return (
            <Host>
                <mdui-tabs value={this.tabs[0]?.value || 'tab-1'}> {/* Set default tab value */}

                    {/* Render each tab */}
                    {this.tabs.map(tab => (
                        <mdui-tab value={tab.value}>
                            {tab.label}
                        </mdui-tab>
                    ))}

                    {/* Render each panel */}
                    {this.panels.map(panel => (
                        <mdui-tab-panel slot={panel.slot} value={panel.value}>
                            {panel.content}
                        </mdui-tab-panel>
                    ))}

                </mdui-tabs>
            </Host>
        );
    }
}