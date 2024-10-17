import { Component, Host, h, Prop, Event, EventEmitter, Element, Method } from '@stencil/core';

import 'mdui/components/dialog.js';

@Component({
    tag: 'ur-dialog',
    styleUrl: 'ur-dialog.css',
    shadow: true,
})
export class UrDialog {
    @Element()
    el: HTMLElement;

    private urDialog: any;
    private dialogElement!: HTMLElement;

    @Prop()
    icon: string = null;

    @Prop()
    headline: string = 'My test dialog';

    @Prop()
    description: string = "Test Description";

    @Prop()
    open: boolean = false;

    @Prop()
    fullscreen: boolean = false;

    @Prop()
    closeOnEsc: boolean = true;

    @Prop()
    closeOnOverlayClick: boolean = true;

    @Event()
    dialogConfirmed: EventEmitter<void>;

    componentDidLoad() {
        this.dialogElement = this.el.shadowRoot.querySelector(".example-dialog");
    }

    @Method()
    openDialog() {
        this.dialogElement.open = true;
    }

    @Method()
    closeDialog() {
        this.dialogElement.open = false
    }

    handleConfirm() {
        this.dialogConfirmed.emit(); // Emit the confirmation event
        this.closeDialog(); // Close the dialog after confirmation
    }

    render() {
        return (
            <Host>
                <mdui-dialog
                    open={this.open}
                    close-on-overlay-click={this.closeOnOverlayClick}
                    close-on-esc={this.closeOnEsc}
                    class="example-dialog">
                    <div class="mdui-dialog-title">{this.headline}</div>
                    <div class="mdui-dialog-content">{this.description}</div>
                    <div class="mdui-dialog-actions">
                        <ur-button onClick={() => this.handleConfirm()}>Confirm</ur-button>
                        <ur-button class="mdui-button" onClick={() => this.closeDialog()}>Cancel</ur-button>
                    </div>
                </mdui-dialog>
                <ur-button onClick={() => this.openDialog()}>Open Dialog</ur-button>
            </Host>
        );
    }
}
