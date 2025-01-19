import { Component, Prop, Event, EventEmitter, Host, h } from '@stencil/core';

import 'mdui/components/top-app-bar';
import 'mdui/components/icon';

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
    fontColor: string;

    @Prop()
    quillText: string = 'Quills';

    @Prop()
    deviceVariant: 'desktop' | 'mobile' = 'desktop';

    @Prop()
    searchText: string = 'Search for stories, writers & publishers'; // Default text for search link

    @Event()
    searchLinkClicked: EventEmitter<void>; // Event emitter for search link click

    @Event()
    themeToggle: EventEmitter<void>; // Event emitter for theme toggle

    @Event()
    quillClicked: EventEmitter<void>; // Event emitter for quill click

    @Prop()
    quillCount: number;

    private handleSearchClick = () => {
        this.searchLinkClicked.emit(); // Emit the event
    };

    private handleThemeToggle = () => {
        this.themeToggle.emit(); // Emit the event
    };

    private handleQuillClick = () => {
        this.quillClicked.emit(); // Emit the event
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

                    {this.deviceVariant === 'desktop' && (
                        <div class="search-lnk" onClick={this.handleSearchClick}>
                            <mdui-icon class="icon" name="search"></mdui-icon>
                            <span class="search-txt">{this.searchText}</span>
                        </div>
                    )}

                    <div class="flex-space"></div>
                    {this.deviceVariant === 'desktop' && (
                        <div class="quill-holder">
                            <ur-button
                                font-color="white"
                                border-radius="50px"
                                button-height="40px"
                                variant="text"
                                icon="history_edu--outlined"
                                onClick={() => this.handleQuillClick()}
                            >
                                {this.quillText}
                                <span class={`quill-count ${this.quillCount > 0 ? 'visible' : ''}`}>{this.quillCount}</span>
                            </ur-button>
                        </div>
                    )}

                    {this.deviceVariant === 'mobile' && (
                        <div class="quill-holder-mobile">
                            <ur-button-icon font-color="white" icon="history_edu--outlined" onClick={() => this.handleQuillClick()}></ur-button-icon>
                        </div>
                    )}

                    {this.deviceVariant === 'mobile' && <ur-button-icon icon="search" variant="standard" aria-label="Search" onClick={this.handleSearchClick}></ur-button-icon>}

                    {this.deviceVariant === 'desktop' && (
                        <ur-button-icon icon="dark_mode" variant="standard" aria-label="Toggle theme" onClick={() => this.handleThemeToggle()}></ur-button-icon>
                    )}
                </mdui-top-app-bar>
            </Host>
        );
    }
}
