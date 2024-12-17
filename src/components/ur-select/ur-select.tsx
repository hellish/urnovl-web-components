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
    usage: 'topBar' | 'standard' = 'standard'

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
    size: 'normal' | 'big' | 'small' = 'normal';

    @Prop()
    placement: 'bottom' | 'top' = 'bottom'; // Dropdown position

    @Prop()
    icon: string = ''; // Left icon

    @Prop() endIcon: string = ''; // Right icon

    @Prop() 
    flex: boolean = true; // New fullWidth prop

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
    
        // Access the shadow root
        const shadowRoot = this.host.shadowRoot;
    
        if (shadowRoot) {
            // Select the mdui-select element
            const mduiSelect = shadowRoot.querySelector('mdui-select');
            const menuItems = shadowRoot.querySelectorAll('mdui-menu-item');
            const mduiTextField = shadowRoot.querySelector('mdui-text-field');

            if (mduiTextField) {
                mduiTextField.style.border = '5px';
                console.log('GOT IT', mduiTextField.outerHTML); // Log the full element
            }
    
            // Style and log the mdui-select container
            if (mduiSelect) {
                mduiSelect.style.height = '44px';
                mduiSelect.style.display = 'flex';
                mduiSelect.style.borderRadius = '0';
                mduiSelect.style.flex = '1'; // Example styling

                console.log('Styled mdui-select:', mduiSelect.outerHTML); // Log the full element
            }
    
            // Style and log each menu item
            menuItems.forEach((item, index) => {
                item.style.backgroundColor = index % 2 === 0 ? 'lightgreen' : 'lightcoral'; // Alternate colors
                item.style.fontSize = '9px'; // Example font size
                console.log('Styled menu item:', item.outerHTML); // Log each menu item
            });

            // Fetch and style the <input> element
            const inputElement = shadowRoot.querySelector('input') as HTMLInputElement;
            if (inputElement) {
                inputElement.style.backgroundColor = 'red'; // Style the input
                inputElement.style.color = 'white'; // Adjust text color for contrast
            }
        }
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

        const selectStyles = {
            flex: this.flex ? '1' : '0 1 auto',
            maxWidth: this.usage === 'topBar' ? '350px' : 'initial',
            fontSize: '10px',
        };

        return (
            <Host style={selectStyles}>
                <mdui-select
                    name={this.name}
                    value={this.value}
                    variant={this.variant}
                    usage={this.usage}
                    multiple={this.multiple}
                    class={!this.multiple ? 'single-select' : ''}
                    flex={this.flex}
                    clearable={this.clearable}
                    disabled={this.disabled}
                    required={this.required}
                    readonly={this.readonly}
                    placement={this.placement}
                    placeholder={this.placeholder}
                    end-icon={this.endIcon}
                    onChange={this.handleChange}
                    style={selectStyles} // Apply the dynamic styles
                >
                    {this.icon && (
                        <span slot="icon">
                            {this.icon}
                        </span>
                    )}
                    {this.endIcon && (
                        <span slot="end-icon">
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

    private get host(): HTMLElement {
        return this as unknown as HTMLElement; // Casting this component instance as an HTMLElement
    }
}
