import { Component, Host, Prop, h, Event, EventEmitter, State, Method } from '@stencil/core';

import 'mdui/components/radio-group.js';
import 'mdui/components/radio.js';

@Component({
    tag: 'ur-radio-group',
    styleUrl: 'ur-radio-group.css',
    shadow: true,
})
export class UrRadioGroup {

    @Prop()
    name = 'default-group';

    /** The currently selected value */
    @Prop({ mutable: true })
    value: string | null = null;

    /** Whether the group is required */
    @Prop()
    required = false;

    /** Event emitted when the value changes */
    @Event({
        bubbles: true,
        composed: true,
    })
    valueChanged: EventEmitter<{ name: string; value: string }>;

    /** Event emitted when validation state changes */
    @Event({
        bubbles: true,
        composed: true,
    })
    errorStateChanged: EventEmitter<{ name: string; error: boolean; message?: string }>;

    @State()
    options: HTMLUrRadioButtonElement[] = []; // List of radio buttons in the group

    @Method()
    async validate(): Promise<boolean> {
        if (this.required && !this.value) {
            this.errorStateChanged.emit({
                name: this.name,
                error: true,
                message: 'A selection is required.',
            });
            return false;
        }
        this.errorStateChanged.emit({
            name: this.name,
            error: false,
        });
        return true;
    }

    @Method()
    async reset(): Promise<void> {
        this.value = null;
        this.syncSelection();
    }

    private handleSelectionChange = (event: CustomEvent<{ value: string }>) => {
        const selectedValue = event.detail.value;

        if (this.value !== selectedValue) {
            this.value = selectedValue; // Update the selected value
            this.syncSelection();
            console.log(`Radio group '${this.name}' value changed to: ${this.value}`);
            this.valueChanged.emit({ name: this.name, value: this.value }); // Emit the event
        }
    };

    private syncSelection() {
        this.options.forEach(option => {
            option.checked = option.value === this.value;
        });
    }

    private onSlotChange = (event: Event) => {
        const slot = event.target as HTMLSlotElement;
        this.options = slot.assignedElements().filter(el => el.tagName === 'UR-RADIO-BUTTON') as HTMLUrRadioButtonElement[];

        this.options.forEach(option => {
            option.name = this.name; // Propagate the group name
            option.addEventListener('valueSelected', this.handleSelectionChange as EventListener);
        });

        this.syncSelection(); // Sync the selection initially
    };

    render() {
        return (
            <Host>
                <mdui-radio-group>
                    <slot onSlotchange={this.onSlotChange}></slot>
                </mdui-radio-group>
            </Host>
        );
    }
}
