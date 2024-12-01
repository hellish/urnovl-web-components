import { Component, Host, Prop, h } from '@stencil/core';

import 'mdui/components/tabs';
import 'mdui/components/tab';
import 'mdui/components/tab-panel';

@Component({
    tag: 'ur-tabs',
    styleUrl: 'ur-tabs.css',
    shadow: true,
})

export class UrTabs {

    @Prop()
    tabs: { label: string, value: string }[];

    @Prop()
    panels: { content: string, value: string }[];

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
