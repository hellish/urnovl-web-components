import { Component, Prop, Host, h, Event, EventEmitter } from '@stencil/core';

import 'mdui/components/top-app-bar.js';
import 'mdui/components/icon.js';

@Component({
    tag: 'ur-read-mobile-topappbar',
    styleUrl: 'ur-read-mobile-topappbar.css',
    shadow: true,
})
export class UrMainDesktopTopAppBar {
    @Prop()
    variant: string = 'small'; // Variant prop with a default value

    @Prop()
    headerTitle: string = 'Harry Potter and the Sorcerer’s Stone'; // Default title text

    @Prop()
    scrollBehavior: 'hide' | 'shrink' | 'elevate' = 'hide'; // Scroll behavior with default "hide"

    @Prop()
    scrollThreshold: number = 30; // Default value

    @Event()
    backClick: EventEmitter<void>; // Event for back button click

    @Event()
    chaptersClick: EventEmitter<void>; // Event for chapters button click

    @Event()
    readingSettingsClick: EventEmitter<void>; // Event for reading settings button click

    private handleBackClick = () => {
        this.backClick.emit(); // Emit the backClick event when the button is clicked
    };

    private handleChaptersClick = () => {
        this.chaptersClick.emit(); // Emit the chaptersClick event when the button is clicked
    };

    private handleReadingSettingsClick = () => {
        this.readingSettingsClick.emit(); // Emit the readingSettingsClick event when the button is clicked
    };

    render() {
        return (
            <Host>
                <mdui-top-app-bar 
                variant={this.variant} 
                scroll-target=".example-scroll-target" 
                scroll-behavior={this.scrollBehavior} 
                scroll-threshold={this.scrollThreshold}
                >
                    {/* Back Button using ur-button-icon */}
                    <ur-button-icon
                        icon="arrow_back"
                        variant="standard"
                        aria-label="Back"
                        onClick={this.handleBackClick} // Emit the backClick event on click
                    ></ur-button-icon>

                    {/* Title */}
                    <mdui-top-app-bar-title>{this.headerTitle}</mdui-top-app-bar-title>

                    {/* Chapters Button using ur-button-icon */}
                    <ur-button-icon
                        icon="library_books--outlined"
                        variant="standard"
                        aria-label="Chapters"
                        onClick={this.handleChaptersClick} // Emit the chaptersClick event on click
                    ></ur-button-icon>

                    {/* Reading Settings Button using ur-button-icon */}
                    <ur-button-icon
                        icon="text_format--outlined"
                        variant="standard"
                        aria-label="Reading Settings"
                        onClick={this.handleReadingSettingsClick} // Emit the readingSettingsClick event on click
                    ></ur-button-icon>
                </mdui-top-app-bar>
            </Host>
        );
    }
}
