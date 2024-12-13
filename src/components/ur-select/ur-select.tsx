import { Component, Prop, h, Event, EventEmitter, Watch, Host } from '@stencil/core';

import 'mdui/components/select.js';
import 'mdui/components/menu-item.js';
import 'mdui/components/icon';

@Component({
    tag: 'ur-select',
    styleUrl: 'ur-select.css',
    shadow: true,
})
export class UrSelect {
    @Prop()
    value: string | string[] = ''; // Selected value(s)

    @Prop()
    name: string = ''; // Name of the select

    @Prop()
    label: string = ''; // Label text

    @Prop()
    placeholder: string = ''; // Placeholder text

    @Prop()
    helper: string = ''; // Helper text

    @Prop()
    variant: 'filled' | 'outlined' = 'filled'; // Variant of the select

    @Prop()
    multiple: boolean = false; // Enable multi-select

    @Prop()
    clearable: boolean = false; // Enable clear button

    @Prop()
    disabled: boolean = false; // Disable the select

    @Prop()
    required: boolean = false; // Mark as required

    @Prop()
    readonly: boolean = false; // Make the select read-only

    @Prop()
    placement: 'bottom' | 'top' = 'bottom'; // Dropdown position

    @Prop()
    icon: string = ''; // Left icon

    @Prop()
    endIcon: string = ''; // Right icon

    @Prop()
    suffix: string = ''; // Suffix text or icon

    @Prop()
    clearIcon: string = 'close'; // Icon for the clear button

    @Event({
        bubbles: true,
        composed: true,
    })
    valueChanged: EventEmitter<{ value: string | string[] }>;

    @Watch('value')
    handleValueChange(newValue: string | string[]) {
        this.valueChanged.emit({ value: newValue });
    }

    componentDidLoad() {
        console.log('Preselected value(s) on load:', this.value);
    }

    private handleChange = (event: Event) => {
        const target = event.target as HTMLElement & { value?: string | string[] };
        
        // Attempt to access the value property
        if (target?.value) {
            this.value = target.value;
            console.log('Selected value from property:', this.value);
        } 
        // Fallback: Use getAttribute if value is not accessible
        else if (target.hasAttribute('value')) {
            this.value = target.getAttribute('value') || '';
            console.log('Selected value from attribute:', this.value);
        } 
        // Handle cases where value is not accessible
        else {
            console.warn('Unable to retrieve value from event target.');
        }
    };

    render() {
        return (
            <Host>
                <mdui-select
                    name={this.name}
                    value={this.value}
                    variant={this.variant}
                    multiple={this.multiple}
                    clearable={this.clearable}
                    disabled={this.disabled}
                    required={this.required}
                    readonly={this.readonly}
                    placement={this.placement}
                    placeholder={this.placeholder}
                    onChange={this.handleChange}
                >
                    {this.icon && (
                        <span slot="icon" class="material-icons">
                            {this.icon}
                        </span>
                    )}
                    {this.endIcon && (
                        <span slot="end-icon" class="material-icons">
                            {this.endIcon}
                        </span>
                    )}
                    {this.suffix && <span slot="suffix">{this.suffix}</span>}
                    <slot></slot>
                    {this.helper && <span slot="helper">{this.helper}</span>}
                </mdui-select>
            </Host>
        );
    }
}
