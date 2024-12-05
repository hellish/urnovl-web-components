import { Component, Host, Prop, h, Event, EventEmitter, State, Method } from '@stencil/core';

@Component({
    tag: 'ur-checkbox-group',
    styleUrl: 'ur-checkbox-group.css',
    shadow: true,
})
export class UrCheckboxGroup {
    /** The name of the checkbox group */
    @Prop()
    name: string = 'default-group';

    /** Currently selected values */
    @Prop({ mutable: true })
    values: string[] = [];

    /** Whether the group is required */
    @Prop()
    required: boolean = false;

    /** Enable a "Select All" checkbox */
    @Prop()
    selectAll: boolean = false;

    /** Text for the "Select All" checkbox */
    @Prop()
    selectAllText: string = 'Select All';

    /** Maximum number of selectable options */
    @Prop()
    maxSelectable: number | null = null;

    /** Event emitted when the values change */
    @Event({
        bubbles: true,
        composed: true,
    })
    valueChanged: EventEmitter<{ name: string; values: string[] }>;

    /** Event emitted when validation state changes */
    @Event({
        bubbles: true,
        composed: true,
    })
    errorStateChanged: EventEmitter<{ name: string; error: boolean; message?: string }>;

    @State()
    options: HTMLUrCheckboxElement[] = []; // List of checkboxes in the group

    /** Validate the checkbox group */
    @Method()
    async validate(): Promise<boolean> {
        const isValid = this.values.length > 0 || !this.required;
        this.errorStateChanged.emit({
            name: this.name,
            error: !isValid,
            message: isValid ? undefined : 'At least one checkbox must be selected.',
        });
        return isValid;
    }

    /** Reset the checkbox group */
    @Method()
    async reset(): Promise<void> {
        this.values = [];
        this.syncSelection();
    }

    /** Debounce Utility */
    private debounce<T extends (...args: any[]) => void>(func: T, wait: number): { debounced: T; clear: () => void } {
        let timeout: number;
        const debounced = function (...args: Parameters<T>) {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => func(...args), wait);
        } as T;
        return { debounced, clear: () => clearTimeout(timeout) };
    }

    /** Handle value changes from checkboxes with debounce */
    private handleValueChangeDebounce = this.debounce(
        (event: CustomEvent<{ name: string; value: string; checked: boolean }>) => {
            if (this.isBulkUpdating) {
                console.log(`Suppressed event during bulk update: ${event.detail.value}`);
                return;
            }
    
            const { value, checked } = event.detail;
    
            if (value === 'select-all') {
                console.log('Select All clicked');
                this.handleSelectAllToggle(checked);
            } else {
                if (this.isBulkUpdating === true) return;
                if (checked) {
                    if (this.maxSelectable && this.values.length >= this.maxSelectable) {
                        console.warn(`Max selectable limit reached: ${this.maxSelectable}`);
                        this.syncSelection();
                        return;
                    }
                    this.values = [...new Set([...this.values, value])];
                } else {
                    this.values = this.values.filter(v => v !== value);
                }
    
                const isSelectAll = this.isSelectAllSelected();
                if (isSelectAll && this.values.length < this.options.length - 1) {
                    this.values = this.values.filter(v => v !== 'select-all');
                }
                console.log('is this called??????????????????');
                if (this.maxSelectable) {
                    this.syncSelection();
                }
                this.emitFormData();
            }
        },
        50
    );
    
    /** Wrapper for handleValueChange */
    private handleValueChange = this.handleValueChangeDebounce.debounced;
    private isBulkUpdating: boolean = false;

    /** Handle "Select All" toggle */
    private handleSelectAllToggle(isChecked: boolean) {
        console.log(`Handle Select All Toggle - Checked: ${isChecked}`);
    
        this.isBulkUpdating = true; // Suppress individual checkbox updates
        this.handleValueChangeDebounce.clear(); // Clear any queued debounce calls
    
        if (isChecked) {
            console.log('select all');
            // Directly select all items
            this.values = this.options.map(opt => opt.value).filter(v => v !== 'select-all');
        } else {
            console.log('deselect all');
            // Deselect all items
            this.values = [];
        }
    
        this.isBulkUpdating = false; // Release suppression
        this.syncSelection(isChecked); // Only call syncSelection once
        this.emitFormData(); // Emit form data after state is finalized
    }

    private syncSelection(disableOptions = false) {
        const disableUnselected = typeof this.maxSelectable === 'number' && this.maxSelectable > 0 && this.values.length >= this.maxSelectable;
    
        console.log('disableOptions:', disableOptions);
        this.options.forEach(option => {
            const isSelected = this.values.includes(option.value);
    
            if (option.value === 'select-all') {
                const isChecked = this.isSelectAllSelected();
                if (option.checked !== isChecked) {
                    option.checked = isChecked;
                    console.log(`Checkbox: ${option.value} (Select All) - Checked: ${isChecked}`);
                }
                option.disabled = false; // "Select All" is always enabled
            } else {
                if (option.checked !== isSelected) {
                    option.checked = isSelected;
                }
    
                const shouldDisable = disableOptions || (disableUnselected && !isSelected);
                if (option.disabled !== shouldDisable) {
                    option.disabled = shouldDisable;
                    console.log(shouldDisable ? 'Disable the options' : 'Enable the options');
                }
            }
        });
    }
    

    /** Check if "Select All" is selected */
    private isSelectAllSelected(): boolean {
        const selectableOptions = this.options.filter(opt => opt.value !== 'select-all');
        return this.values.length === selectableOptions.length;
    }

    /** Emit form data */
    private emitFormData() {
        console.log(`Form Data (Checkbox Group - ${this.name}):`, this.values);
        this.valueChanged.emit({ name: this.name, values: this.values });
    }

    /** Handle slot change to register options */
private onSlotChange = (event: Event) => {
    const slot = event.target as HTMLSlotElement;
    const newOptions = slot.assignedElements().filter(el => el.tagName === 'UR-CHECKBOX') as HTMLUrCheckboxElement[];

    if (newOptions.length !== this.options.length) {
        this.options = newOptions;

        this.options.forEach(option => {
            option.name = this.name; // Propagate the group name
            option.addEventListener('valueChanged', this.handleValueChange as EventListener);
        });

        this.syncSelection(); // Sync the selection initially
        this.emitFormData(); // Emit form data after syncing preselected values
    }
};


    render() {
        const showSelectAll = this.selectAll && this.maxSelectable === null;

        return (
            <Host>
                {showSelectAll && (
                    <ur-checkbox value="select-all" onValueChanged={this.handleValueChange}>
                        {this.selectAllText}
                    </ur-checkbox>
                )}
                <slot onSlotchange={this.onSlotChange}></slot>
            </Host>
        );
    }
}
