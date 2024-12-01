import { Component, Host, h, Prop, Element, Method } from '@stencil/core';

import 'mdui/components/navigation-drawer.js';

@Component({
    tag: 'ur-navigation-drawer',
    styleUrl: 'ur-navigation-drawer.css',
    shadow: true,
})
export class UrNavigationDrawer {
    private drawerElement!: HTMLElement & { open: boolean };

    @Element()
    el: HTMLElement;

    /** Determines if the drawer is open */
    @Prop()
    open = false;

    /** Placement of the drawer: 'left' or 'right' */
    @Prop()
    placement: 'left' | 'right' = 'right';

    /** Closes the drawer when the 'Esc' key is pressed */
    @Prop()
    closeOnEsc = true;

    /** Closes the drawer when clicking outside of it */
    @Prop()
    closeOnOverlayClick = true;

    /** Contains the drawer within its parent element */
    @Prop()
    contained = false;

    componentDidLoad() {
        this.drawerElement = this.el.shadowRoot.querySelector('mdui-navigation-drawer');
    }

    @Method()
    async openDrawer() {
        this.drawerElement.open = true;
        this.open = true;
    }

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
