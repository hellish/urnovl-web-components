import { Component, Host, h, Prop, Element, Method } from '@stencil/core';

import 'mdui/components/dialog.js';

@Component({
    tag: 'ur-dialog',
    styleUrl: 'ur-dialog.css',
    shadow: true,
})
export class UrDialog {

    private dialogElement!: HTMLElement & { open: boolean };

    @Element()
    el: HTMLElement;

    @Prop()
    description: string | null = null;

    @Prop()
    open = false;

    @Prop()
    fullscreen = false;

    @Prop()
    closeOnEsc = true;

    @Prop()
    closeOnOverlayClick = true;

    @Prop()
    borderRadius: string | null = "0";

    componentDidLoad() {
        this.el.style.setProperty("--ur-dialog-panel-border-radius", this.borderRadius);
        this.dialogElement = this.el.shadowRoot.querySelector(".inner-dialog");
    }

    @Method()
    async openDialog() {
        this.dialogElement.open = true;
    }

    @Method()
    async closeDialog() {
        this.dialogElement.open = false
    }

    render() {
        return (
            <Host>
                <mdui-dialog
                    open={this.open}
                    close-on-overlay-click={this.closeOnOverlayClick}
                    close-on-esc={this.closeOnEsc}
                    fullscreen={this.fullscreen}
                    class="inner-dialog">
                    <slot></slot>
                </mdui-dialog>
            </Host>
        );
    }
}
