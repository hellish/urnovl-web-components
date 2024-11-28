import { Component, Host, h, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';

import 'mdui/components/navigation-drawer.js';

@Component({
    tag: 'ur-navigation-drawer',
    styleUrl: 'ur-navigation-drawer.css',
    shadow: false,
})
export class UrNavigationDrawer {
    private drawerElement!: HTMLElement & { open: boolean };

    @Element() el: HTMLElement;

    /** Determines if the drawer is open */
    @Prop({ reflect: true, mutable: true }) open = false;

    /** Placement of the drawer: 'left' or 'right' */
    @Prop() placement: 'left' | 'right' = 'right';

    /** Closes the drawer when the 'Esc' key is pressed */
    @Prop() closeOnEsc = true;

    /** Closes the drawer when clicking outside of it */
    @Prop() closeOnOverlayClick = true;

    /** Contains the drawer within its parent element */
    @Prop() contained = false;

    /** Event emitted when the drawer is opened */
    @Event() opened: EventEmitter<void>;

    /** Event emitted when the drawer is closed */
    @Event() closed: EventEmitter<void>;

    componentDidLoad() {
        this.drawerElement = this.el.querySelector('mdui-navigation-drawer');
        // Manually initialize MDUI Drawer
        const mdui = (window as any).mdui;
        if (mdui) {
            mdui.mutation();
        }
        this.drawerElement.addEventListener('opened', () => this.opened.emit());
        this.drawerElement.addEventListener('closed', () => this.closed.emit());
    }

    /** Opens the drawer */
    @Method()
    async openDrawer() {
        this.drawerElement.open = true;
        this.open = true;
    }

    /** Closes the drawer */
    @Method()
    async closeDrawer() {
        this.drawerElement.open = false;
        this.open = false;
    }

    render() {
        return (
            <Host>
                <mdui-navigation-drawer
                    placement={this.placement}
                    modal
                    close-on-esc={this.closeOnEsc}
                    close-on-overlay-click={this.closeOnOverlayClick}
                    contained={this.contained}
                    open={this.open}
                >
                    <slot></slot>
                </mdui-navigation-drawer>
            </Host>
        );
    }
}
