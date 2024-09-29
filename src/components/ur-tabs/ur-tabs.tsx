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
    @Prop() tabs: { label: string, value: string }[];

    /** The array of panels, each with content and value **/
    @Prop() panels: { content: string, value: string }[];

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
                        <mdui-tab-panel value={panel.value}>
                            <slot name={`panel-${panel.value}`}>{panel.content}</slot> {/* Named slots for each panel */}
                        </mdui-tab-panel>
                    ))}

                </mdui-tabs>
            </Host>
        );
    }
}