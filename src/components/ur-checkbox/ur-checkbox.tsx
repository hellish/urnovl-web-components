import { Component, Host, Prop, h, Event, EventEmitter, Watch } from '@stencil/core';
import 'mdui/components/checkbox';

@Component({
    tag: 'ur-checkbox',
    styleUrl: 'ur-checkbox.css',
    shadow: true,
})
export class UrCheckbox {
    /** Indicates if the checkbox is disabled */
    @Prop()
    disabled = false;

    /** Indicates if the checkbox is checked */
    @Prop({ mutable: true, reflect: true })
    checked = false;

    /** The value of the checkbox */
    @Prop()
    value: string = '';

    /** The name of the checkbox group */
    @Prop()
    name: string = '';

    /** Event emitted when the checkbox value changes */
    @Event({
        bubbles: true,
        composed: true,
    })
    valueChanged: EventEmitter<{ name: string; value: string; checked: boolean }>;

    /** Internal flag to suppress valueChanged during programmatic updates */
    private isProgrammaticChange = false;

    @Watch('checked')
    watchChecked(newChecked: boolean, oldChecked: boolean) {
        if (newChecked !== oldChecked) {
            if (!this.isProgrammaticChange) {
                this.emitValueChanged();
            }
            this.isProgrammaticChange = false; // Reset the flag after handling
        }
    }

    private handleChange = (event: Event) => {
        if (!this.disabled) {
            const target = event.target as HTMLInputElement;
            this.checked = target.checked; // Sync the checked state with the DOM
        }
    };

    private emitValueChanged() {
        this.valueChanged.emit({
            name: this.name,
            value: this.value,
            checked: this.checked,
        });
    }

    /** Programmatically update the checked state */
    public setCheckedState(checked: boolean) {
        this.isProgrammaticChange = true;
        this.checked = checked;
    }

    /** Reset the checkbox state */
    public reset() {
        this.setCheckedState(false); // Use programmatic update to reset
        this.emitValueChanged(); // Emit the valueChanged event after reset
    }

    render() {
        return (
            <Host>
                <mdui-checkbox
                    checked={this.checked ? 'true' : undefined}
                    disabled={this.disabled ? 'true' : undefined}
                    onChange={this.handleChange}
                >
                    <slot></slot>
                </mdui-checkbox>
            </Host>
        );
    }
}
