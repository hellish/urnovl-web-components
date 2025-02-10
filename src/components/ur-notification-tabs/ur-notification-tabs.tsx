import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';
import 'mdui/components/tabs';
import 'mdui/components/tab';
import 'mdui/components/tab-panel';

interface Tab {
    value: string;
    text: () => string;
}

@Component({
    tag: 'ur-notification-tabs',
    styleUrl: 'ur-notification-tabs.css',
    shadow: true,
})
export class UrNotificationTabs {
    @Prop()
    activeTab: string = 'notifications'; // Controlled by the parent

    @Prop()
    notificationsTabText: string = 'Notifications';

    @Prop()
    requestsTabText: string = 'Requests';

    @Prop()
    fullWidthTabs: boolean = true;

    @Event()
    tabChange: EventEmitter<string>; // Emitted when a tab is clicked

    componentWillLoad() {
        // Emit the initial tab value when the component loads
        if (this.activeTab) {
            this.tabChange.emit(this.activeTab);
        }
    }

    private handleTabChange = (event: CustomEvent) => {
        // Get the new tab value from the event target
        const newValue = event.target?.['value'];

        // Check if the new value is valid
        if (newValue) {
            // Emit the tab value to the parent component
            this.tabChange.emit(newValue);
        }
    };

    private readonly tabs: Tab[] = [
        {
            value: 'notifications',
            text: () => this.notificationsTabText,
        },
        {
            value: 'requests',
            text: () => this.requestsTabText,
        },
    ];

    render() {
        return (
            <Host>
                <mdui-tabs value={this.activeTab} onChange={this.handleTabChange} full-width-tabs={this.fullWidthTabs}>
                    {this.tabs.map(tab => (
                        <mdui-tab key={tab.value} value={tab.value}>
                            {tab.text()}
                        </mdui-tab>
                    ))}

                    {this.tabs.map(tab => (
                        <mdui-tab-panel key={tab.value} slot="panel" value={tab.value}>
                            <slot name={tab.value}></slot>
                        </mdui-tab-panel>
                    ))}
                </mdui-tabs>
            </Host>
        );
    }
}
