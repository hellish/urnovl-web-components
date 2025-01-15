import { Component, Host, h, Prop, Element, Method, State } from '@stencil/core';
import 'mdui/components/navigation-drawer';

@Component({
    tag: 'ur-navigation-drawer-global',
    styleUrl: 'ur-navigation-drawer-global.css',
    shadow: true,
})
export class UrNavigationDrawerGlobal {
    private drawerElement!: HTMLElement & { open: boolean };
    private headerElement: HTMLElement;
    private footerElement: HTMLElement;
    private resizeObserver: ResizeObserver;

    @Element()
    el: HTMLElement;

    @State()
    contentHeight: number = 0;

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

    componentDidLoad() {
        this.drawerElement = this.el.shadowRoot.querySelector('mdui-navigation-drawer');
        this.headerElement = this.el.shadowRoot.querySelector('.drawer-header');
        this.footerElement = this.el.shadowRoot.querySelector('.drawer-footer');

        // Initialize ResizeObserver to watch for height changes
        this.resizeObserver = new ResizeObserver(() => {
            this.updateContentHeight();
        });

        // Observe both header and footer
        this.resizeObserver.observe(this.headerElement);
        this.resizeObserver.observe(this.footerElement);

        // Initial height calculation
        this.updateContentHeight();
    }

    disconnectedCallback() {
        // Clean up ResizeObserver
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }

    private updateContentHeight() {
        const headerHeight = this.headerElement.offsetHeight;
        const footerHeight = this.footerElement.offsetHeight;
        this.contentHeight = headerHeight + footerHeight + 16;
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
                <mdui-navigation-drawer placement={this.placement} modal close-on-esc={this.closeOnEsc} close-on-overlay-click={this.closeOnOverlayClick} open={this.open}>
                    <div class="drawer-header" role="banner">
                        <slot name="header"></slot>
                    </div>
                    <div class="drawer-content" role="main" style={{ height: `calc(100vh - ${this.contentHeight}px)` }}>
                        <slot></slot>
                    </div>
                    <div class="drawer-footer" role="contentinfo">
                        <slot name="footer"></slot>
                    </div>
                </mdui-navigation-drawer>
            </Host>
        );
    }
}
