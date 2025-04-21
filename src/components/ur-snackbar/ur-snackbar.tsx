import { Component, Host, Prop, h, Event, EventEmitter } from '@stencil/core';
import 'mdui/components/snackbar';

@Component({
    tag: 'ur-snackbar',
    styleUrl: 'ur-snackbar.css',
    shadow: true,
})
export class UrSnackbar {
    /**
     * Controls whether the snackbar is open
     */
    @Prop({ mutable: true, reflect: true })
    open = false;

    /**
     * Position of the snackbar
     */
    @Prop()
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' = 'bottom';

    /**
     * Text for the action button
     */
    @Prop()
    action?: string;

    /**
     * Whether the action button is in loading state
     */
    @Prop()
    actionLoading = false;

    /**
     * Whether to show a close button
     */
    @Prop()
    closeable = false;

    /**
     * Material icon name for the close button
     */
    @Prop()
    closeIcon?: string;

    /**
     * Maximum number of text lines
     */
    @Prop()
    messageLine?: 1 | 2 = 1;

    /**
     * Auto close delay in milliseconds
     */
    @Prop()
    autoCloseDelay = 5000;

    /**
     * Whether to close when clicking outside
     */
    @Prop()
    closeOnOutsideClick = false;

    /**
     * Message text
     */
    @Prop()
    message = '';

    /**
     * Background color
     */
    @Prop()
    backColor = 'rgb(var(--mdui-color-surface-container-highest))';

    /**
     * Text color
     */
    @Prop()
    fontColor = 'rgb(var(--mdui-color-on-surface))';

    /**
     * Action button color
     */
    @Prop()
    actionColor = 'rgb(var(--mdui-color-primary))';

    /**
     * Border radius
     */
    @Prop()
    radius = '4px';

    /**
     * Z-index
     */
    @Prop()
    zIndex = '1000';

    /**
     * Emitted when the snackbar starts to open
     */
    @Event() 
    urOpen: EventEmitter<void>;

    /**
     * Emitted after the snackbar opens and animations complete
     */
    @Event() 
    urOpened: EventEmitter<void>;

    /**
     * Emitted when the snackbar starts to close
     */
    @Event() 
    urClose: EventEmitter<void>;

    /**
     * Emitted after the snackbar closes and animations complete
     */
    @Event() 
    urClosed: EventEmitter<void>;

    /**
     * Emitted when the action button is clicked
     */
    @Event() 
    urActionClick: EventEmitter<void>;

    private handleOpen = () => {
        this.urOpen.emit();
    };

    private handleOpened = () => {
        this.urOpened.emit();
    };

    private handleClose = () => {
        this.urClose.emit();
    };

    private handleClosed = () => {
        this.urClosed.emit();
    };

    private handleActionClick = () => {
        this.urActionClick.emit();
    };

    render() {
        return (
            <Host>
                <mdui-snackbar
                    open={this.open}
                    placement={this.placement}
                    action={this.action}
                    action-loading={this.actionLoading}
                    closeable={this.closeable}
                    close-icon={this.closeIcon}
                    message-line={this.messageLine}
                    auto-close-delay={this.autoCloseDelay}
                    close-on-outside-click={this.closeOnOutsideClick}
                    onOpen={this.handleOpen}
                    onOpened={this.handleOpened}
                    onClose={this.handleClose}
                    onClosed={this.handleClosed}
                    onAction-click={this.handleActionClick}
                    style={{
                        '--z-index': this.zIndex,
                        '--shape-corner': this.radius,
                        'background-color': this.backColor,
                        'color': this.fontColor,
                    }}
                >
                    {this.message}
                    <slot></slot>
                    <slot name="action" slot="action"></slot>
                    <slot name="close-button" slot="close-button"></slot>
                    <slot name="close-icon" slot="close-icon"></slot>
                </mdui-snackbar>
            </Host>
        );
    }
}
