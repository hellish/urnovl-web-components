import { Component, h, Prop, Event, EventEmitter, Host } from '@stencil/core';
import 'mdui/components/tabs';
import 'mdui/components/tab';
import 'mdui/components/tab-panel';

interface Tab {
    value: string;
    text: () => string;
    visibleFor: 'all' | 'owner';
    mobileOnly?: boolean;
}

@Component({
    tag: 'ur-page-shared-list-tabs',
    styleUrl: 'ur-page-shared-list-tabs.css',
    shadow: true,
})
export class UrPageSharedListTabs {
    @Prop()
    activeTab: string = 'followers'; // Controlled by the parent

    @Prop()
    followersTabText: string = 'Followers';

    @Prop()
    membersTabText: string = 'Members';

    @Prop()
    isOwner: boolean = false;

    @Prop()
    fullWidthTabs: boolean = true;

    @Prop()
    isMobile: boolean = false; // Controlled by the parent

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
            value: 'followers',
            text: () => this.followersTabText,
            visibleFor: 'all',
        },
        {
            value: 'members',
            text: () => this.membersTabText,
            visibleFor: 'all',
        },
    ];

    private getVisibleTabs(): Tab[] {
        return this.tabs.filter(tab => 
            (tab.visibleFor === 'all' || (tab.visibleFor === 'owner' && this.isOwner)) &&
            (!tab.mobileOnly || this.isMobile) // Include the tab if it's not mobile-only or if the device is mobile
        );
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