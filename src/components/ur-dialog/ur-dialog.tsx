import { Component, Host, h, Prop, Element, Method, Event, EventEmitter } from '@stencil/core';

import 'mdui/components/dialog';

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
    showHeader = true;

    @Prop()
    overlayHeader = false;
    
    @Prop()
    variant: 'mobile' | 'desktop' = 'desktop';

    @Prop()
    borderRadius: string | null = '12px';

    @Event()
    urDialogClose: EventEmitter<any>;

    private handleClose = async (event: CustomEvent) => {
        // Call closeDialog to ensure consistent cleanup
        await this.closeDialog(event.detail);
    }

    componentDidLoad() {
        this.el.style.setProperty('--ur-dialog-panel-border-radius', this.borderRadius);
        this.dialogElement = this.el.shadowRoot.querySelector('.inner-dialog');
    }

    disconnectedCallback() {
        if (this.dialogElement) {
            this.dialogElement.removeEventListener('mdui-dialog-close', this.handleClose);
        }
    }

    @Method()
    async openDialog() {
        this.dialogElement.open = true;
    }

    @Method()
    async closeDialog(result?: any) {
        if (this.dialogElement) {
            // First set open to false
            this.dialogElement.open = false;
            
            // Wait for next frame to ensure the dialog is actually closing
            await new Promise(resolve => requestAnimationFrame(resolve));
            
            // Emit the close event
            this.urDialogClose.emit(result);
        }
    }

    render() {
        return (
            <Host>
                <mdui-dialog 
                    open={this.open} 
                    close-on-overlay-click={this.closeOnOverlayClick} 
                    close-on-esc={this.closeOnEsc} 
                    fullscreen={this.fullscreen}
                    border-radius={this.borderRadius}
                    class={{
                        'inner-dialog': true,
                        'mobile': this.variant === 'mobile',
                        'desktop': this.variant === 'desktop',
                    }}
                    style={{
                        '--ur-dialog-panel-border-radius': this.borderRadius,
                    }}
                    onMduiDialogClose={this.handleClose}
                >
                    {this.showHeader && (
                        <div part="header" class={{
                            'dialog-header': true,
                            'header-overlay': this.overlayHeader
                        }}>
                            <slot name="header"></slot>
                        </div>
                    )}
                    <slot></slot>
                    <slot name="main-content" />
                </mdui-dialog>
            </Host>
        );
    }
}
