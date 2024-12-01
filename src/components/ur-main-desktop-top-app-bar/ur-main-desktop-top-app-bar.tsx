import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

import 'mdui/components/top-app-bar.js';
import 'mdui/components/icon.js';

@Component({
    tag: 'ur-main-desktop-top-app-bar',
    styleUrl: 'ur-main-desktop-top-app-bar.css',
    shadow: true,
})
export class UrMainDesktopTopAppBar {
    @Prop()
    variant: string = 'small'; // Variant prop with a default value

    @Prop()
    logoRotation: number = 0; // Rotation angle for the logo, default 0 degrees

    @Prop()
    logoOpacity: number = 1; // Opacity for the logo

    @Prop()
    searchText: string = 'Search for stories, writers & publishers'; // Default text for search link

    @Event()
    searchLinkClicked: EventEmitter<void>; // Event emitter for search link click

    private handleSearchClick = () => {
        this.searchLinkClicked.emit(); // Emit the event
    };
    render() {
        return (
            <Host>
                <mdui-top-app-bar variant={this.variant} scroll-target=".example-scroll-target">
                    {/* Logo */}
                    <div class="logo-hld">
                        <ur-logo
                            width="70" // Custom width for the logo
                            height="19" // Custom height for the logo
                            color="currentColor" // Dynamic fill color of the logo
                            rotation={this.logoRotation} // Rotation angle for the logo
                            opacity={this.logoOpacity} // Opacity for the logo
                        ></ur-logo>
                    </div>
                    <div class="search-lnk" onClick={this.handleSearchClick}>
                        <mdui-icon class="icon" name="search"></mdui-icon>
                        <span class="search-txt">{this.searchText}</span>
                    </div>
                </mdui-top-app-bar>
            </Host>
        );
    }
}
