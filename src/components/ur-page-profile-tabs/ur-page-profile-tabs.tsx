import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';
import 'mdui/components/tabs';
import 'mdui/components/tab';
import 'mdui/components/tab-panel';

interface Tab {
    value: string;
    text: () => string;
    visibleFor: 'all' | 'owner';
}

@Component({
    tag: 'ur-page-profile-tabs',
    styleUrl: 'ur-page-profile-tabs.css',
    shadow: true,
})
export class UrPageProfileTabs {
    @Prop()
    activeTab: string = 'stories'; // Controlled by the parent

    @Prop()
    storiesTabText: string = 'Stories';

    @Prop()
    libraryTabText: string = 'Library';

    @Prop()
    transactionsTabText: string = 'Transactions';

    @Prop()
    statisticsTabText: string = 'Statistics';

    @Prop()
    settingsTabText: string = 'Settings';

    @Prop()
    isOwner: boolean = false;

    @Prop()
    fullWidthTabs: boolean = true;

    @Event()
    tabChange: EventEmitter<string>; // Emitted when a tab is clicked

    componentWillLoad() {
        // Emit the initial tab value when the component loads
        if (this.activeTab) {
            this.tabChange.emit(this.activeTab);
            console.log('Initial tab emitted:', this.activeTab); // Debugging: Log the initial tab
        }
    }

    private handleTabChange = (event: CustomEvent) => {
        // Get the new tab value from the event target
        const newValue = event.target?.['value'];

        // Check if the new value is valid
        if (newValue) {
            // Emit the tab value to the parent component
            this.tabChange.emit(newValue);
            console.log('tabChange', newValue); // Debugging: Log the new tab value
        }
    };

    private readonly tabs: Tab[] = [
        {
            value: 'stories',
            text: () => this.storiesTabText,
            visibleFor: 'all',
        },
        {
            value: 'library',
            text: () => this.libraryTabText,
            visibleFor: 'all',
        },
        {
            value: 'transactions',
            text: () => this.transactionsTabText,
            visibleFor: 'owner',
        },
        {
            value: 'statistics',
            text: () => this.statisticsTabText,
            visibleFor: 'owner',
        },
        {
            value: 'settings',
            text: () => this.settingsTabText,
            visibleFor: 'owner',
        },
    ];

    private getVisibleTabs(): Tab[] {
        return this.tabs.filter(tab => tab.visibleFor === 'all' || (tab.visibleFor === 'owner' && this.isOwner));
    }

    render() {
        const visibleTabs = this.getVisibleTabs();

        return (
            <Host>
                <mdui-tabs value={this.activeTab} onChange={this.handleTabChange} full-width-tabs={this.fullWidthTabs}>
                    {visibleTabs.map(tab => (
                        <mdui-tab key={tab.value} value={tab.value}>
                            {tab.text()}
                        </mdui-tab>
                    ))}

                    {visibleTabs.map(tab => (
                        <mdui-tab-panel key={tab.value} slot="panel" value={tab.value}>
                            <slot name={tab.value}></slot>
                        </mdui-tab-panel>
                    ))}
                </mdui-tabs>
            </Host>
        );
    }
}
