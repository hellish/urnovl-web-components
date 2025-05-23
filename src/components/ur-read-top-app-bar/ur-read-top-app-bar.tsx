import { Component, Prop, Host, h, Event, EventEmitter, State, Element } from '@stencil/core';

import 'mdui/components/top-app-bar';
import 'mdui/components/icon';

@Component({
    tag: 'ur-read-top-app-bar',
    styleUrl: 'ur-read-top-app-bar.css',
    shadow: true,
})
export class UrReadTopAppBar {
    /** Variant of the top app bar (e.g., 'small', 'medium', etc.) */
    @Prop() variant: 'small' | 'medium' | 'large' = 'small';

    /** Title of the novel */
    @Prop()
    novelTitle: string;

    /** Whether the current user is the chapter owner */
    @Prop()
    isChapterOwner: boolean = false; // Default to false

    @Prop()
    deviceVariant: 'desktop' | 'mobile' = 'desktop'; // Default to desktop

    /** Behavior of the top app bar on scroll */
    @Prop()
    scrollBehavior: 'hide' | 'shrink' | 'elevate' = 'hide';

    /** Scroll threshold in pixels (default: 50) */
    @Prop()
    scrollThreshold: number = 50;

    @State()
    topValue: string = '0'; // Holds the current `top` value dynamically

    @Element()
    el: HTMLElement; // Reference to the host element

    @Event()
    readingSettingsClick: EventEmitter<void>; // Event for reading settings button click

    @Event()
    storySummaryClick: EventEmitter<void>; // Event for story summary button click

    @Event()
    editChapterClick: EventEmitter<void>; // Event for edit chapter button click

    @Event()
    chapterButtonClick: EventEmitter<void>; // Event for edit chapter button click

    private mutationObserver: MutationObserver; // Observer for detecting changes

    private handleReadingSettingsClick = () => {
        console.log('Handle read settings');
        this.readingSettingsClick.emit(); // Emit the readingSettingsClick event when the button is clicked
    };

    private handleStorySummaryClick = () => {
        console.log('Story summary click');
        this.storySummaryClick.emit();
    };

    private handleEditChapterClick = () => {
        console.log('Edit clicked');
        this.editChapterClick.emit();
    };

    private handleChapterButtonClick = () => {
        console.log('Chapter button clicked');
        // Emit a different event or implement logic for chapter selection
        this.chapterButtonClick.emit(); // Emit a new custom event for chapter button click
    };

    /**
     * Initializes the MutationObserver to detect changes to the "hide" attribute
     */
    private initMutationObserver() {
        const topAppBar = this.el.shadowRoot?.querySelector('mdui-top-app-bar') as HTMLElement;

        if (topAppBar) {
            // Observe attribute changes on the <mdui-top-app-bar> element
            this.mutationObserver = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'hide') {
                        const isHidden = topAppBar.hasAttribute('hide');
                        this.updateTopValue(isHidden);
                    }
                });
            });

            this.mutationObserver.observe(topAppBar, { attributes: true });
        }
    }

    /**
     * Updates the top value dynamically based on the "hide" attribute
     * @param isHidden - Whether the top app bar is hidden
     */
    private updateTopValue(isHidden: boolean) {
        const topAppBar = this.el.shadowRoot?.querySelector('mdui-top-app-bar') as HTMLElement;

        if (topAppBar) {
            const height = topAppBar.offsetHeight; // Calculate height dynamically
            this.topValue = isHidden ? `-${height}px` : '0'; // Update `top` value
            topAppBar.style.top = this.topValue; // Apply the style dynamically
        }
    }

    /**
     * Lifecycle hook: Called once the component is rendered in the DOM
     */
    componentDidLoad() {
        this.initMutationObserver(); // Initialize the MutationObserver
        const topAppBar = this.el.shadowRoot?.querySelector('mdui-top-app-bar') as HTMLElement;

        // Perform initial top calculation
        if (topAppBar) {
            const isHidden = topAppBar.hasAttribute('hide');
            this.updateTopValue(isHidden);
        }
    }

    /**
     * Lifecycle hook: Cleans up the MutationObserver
     */
    disconnectedCallback() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
    }

    render() {
        return (
            <Host>
                <mdui-top-app-bar
                    variant={this.variant}
                    scroll-target=".example-scroll-target"
                    scroll-behavior={this.scrollBehavior}
                    scroll-threshold={this.scrollThreshold}
                    style={{ top: this.topValue }} // Dynamically set the top value
                >
                    {/* Title */}
                    <mdui-top-app-bar-title>{this.novelTitle}</mdui-top-app-bar-title>

                    {/* Edit button - only shown if showEdit is true */}
                    {this.isChapterOwner && <ur-button-icon icon="edit" variant="standard" aria-label="Edit Chapter" onClick={this.handleEditChapterClick}></ur-button-icon>}

                    {/* Slot for additional chapter selection functionality */}
                    {this.deviceVariant === 'desktop' && <slot name="chapter-select"></slot>}

                    {/* Chapter button for smaller screens */}
                    {this.deviceVariant === 'mobile' && (
                        <ur-button-icon
                            icon="list"
                            variant="standard"
                            aria-label="Select Chapter"
                            onClick={this.handleChapterButtonClick} // Handle click event
                        ></ur-button-icon>
                    )}

                    {/* Buttons for story summary and reading settings */}
                    <ur-button-icon icon="info_outline" variant="standard" aria-label="Story Summary" onClick={this.handleStorySummaryClick}></ur-button-icon>

                    {/* Button for reading settings */}
                    <ur-button-icon icon="text_format--outlined" variant="standard" aria-label="Reading Settings" onClick={this.handleReadingSettingsClick}></ur-button-icon>

                    {/* Progress bar or additional slots */}
                    <div class="read-progress">
                        <slot name="read-progress"></slot>
                    </div>
                </mdui-top-app-bar>
            </Host>
        );
    }
}
